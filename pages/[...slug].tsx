import { GetStaticPathsResult, GetStaticPropsResult } from "next"
import Head from "next/head"
import { DrupalNode, DrupalParagraph } from "next-drupal"

import { drupal } from "lib/drupal"
import { NodeAboutUs } from "components/node--about-us"
import { Layout } from "components/layout"

const RESOURCE_TYPES = ["node--page", "node--about_us"]

interface NodePageProps {
  resource: DrupalNode
}

export default function NodePage({ resource}: NodePageProps) {
  if (!resource) return null
  console.log(resource);
  return (
    <Layout>
      <Head>
        <title>{resource.title}</title>
        <meta name="description" content="A Next.js site powered by Drupal." />
      </Head>
      {resource.type === "node--about_us" && <NodeAboutUs node={resource} />}
    </Layout>
  )
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  return {
    paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context),
    fallback: "blocking",
  }
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
  const path = await drupal.translatePathFromContext(context)

  if (!path) {
    return {
      notFound: true,
    }
  }

  const type = path.jsonapi.resourceName

  let params = {}
  if (type === "node--about_us") {
    params = {
      include: "field_text,field_pillars,field_highlight,field_core_values,field_leadership,uid",
    }
  }

  const resource = await drupal.getResourceFromContext<DrupalNode>(
    path,
    context,
    {
      params: {
        "filter[status]": 1,
        "fields[node--about_us]": "field_leadership_title,field_core_values_description,field_core_values_title,field_pillars_description,field_pillars_link,field_pillars_title,field_pillars_description,field_image,title,field_text,field_pillars,field_highlight,field_core_values,field_leadership,path,uid,created",
        include: "field_image,field_text,field_pillars,field_pillars.field_svg,field_highlight,field_highlight.field_image,field_core_values,field_core_values.field_image,field_leadership,field_leadership.field_image,uid",
        sort: "-created",
      },
    }
  )

  

  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi.individual}`)
  }

  // If we're not in preview mode and the resource is not published,
  // Return page not found.
  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      resource
    },
  }
}
