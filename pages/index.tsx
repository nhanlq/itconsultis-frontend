import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"

import { drupal } from "lib/drupal"
import { Layout } from "components/layout"
import { NodeAboutUsTeaser } from "components/node--about-us--teaser"

interface IndexPageProps {
  nodes: DrupalNode[]
}

export default function IndexPage({ nodes }: IndexPageProps) {
  console.log(nodes);
  return (
    <Layout>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
        <h1 className="mb-10 text-6xl font-black">Latest Articles.</h1>
        {nodes?.length ? (
          nodes.map((node) => (
            <div key={node.id}>
              <NodeAboutUsTeaser node={node} />
              <hr className="my-20" />
            </div>
          ))
        ) : (
          <p className="py-4">No nodes found</p>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--about_us",
    context,
    {
      params: {
        "filter[status]": 1,
        "fields[node--about_us]": "field_image,title,field_text,field_pillars,field_highlight,field_core_values,field_leadership,path,uid,created",
        include: "field_image,field_text,field_pillars,field_highlight,field_core_values,field_leadership,uid",
        sort: "-created",
      },
    }
  )

  return {
    props: {
      nodes,
    },
  }
}
