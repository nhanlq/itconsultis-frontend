import Image from "next/image"
import { DrupalParagraph } from "next-drupal"

import { absoluteUrl, formatDate } from "lib/utils"

interface TextProps {
  paragraph: DrupalParagraph
}

export function Text({ paragraph, ...props }: TextProps) {
  console.log(paragraph);
  return (
    <article {...props}>
      {/*<h1 className="mb-4 text-6xl font-black leading-tight">{paragraph}</h1>
      <div className="mb-4 text-gray-600">
        {/* {paragraph.field}
        {node.uid?.display_name ? (
          <span>
            Posted by{" "}
            <span className="font-semibold">{node.uid?.display_name}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span> */}
      {/* </div> */}

     
    </article>
  )
}
