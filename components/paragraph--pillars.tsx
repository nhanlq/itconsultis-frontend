import { ParagraphProps } from "components/paragraph"
import Image from "next/image"
import { absoluteUrl, formatDate } from "lib/utils"

export function ParagraphPillars({ paragraph, ...props }: ParagraphProps) {
  return (
      <div key={paragraph.id} className="about-us_pillar__JEM_t">

         {paragraph.field_svg && (
          <div className="about-us_pillar__logo__hezQM">
            <figure className="my-4">
            <object data={absoluteUrl(paragraph.field_svg.uri.url)} type="image/svg+xml">
            </object>
            </figure>
          </div>
        )}
        <h3>{paragraph.field_title}</h3>
      </div>
  )
}