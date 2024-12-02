import { DrupalNode } from "next-drupal"
import Image from "next/image"
import { absoluteUrl, formatDate } from "lib/utils"


interface HighlightProps {
    item: DrupalNode
  }

  export function HighlightItem({ item, ...props }: HighlightProps) {
    console.log(item);
    return (

      <div className={`hightlight ${item.field_image_position}`}>
        <div className="high-item-detail">
          <div className="subtitle">{item.field_subtitle}</div>
          <h3 className="highlight-title">{item.field_title}</h3>
          <div className="about-us_highlight__description" dangerouslySetInnerHTML={{ __html: item.field_description.value }}></div>
        </div>
        <div className="highlight-image">
          <figure className="my-4">
              <Image
                src={absoluteUrl(item.field_image.uri.url)}
                width={768}
                height={480}
                alt={item.field_image.resourceIdObjMeta.alt}
              />
            </figure>
        </div>
      </div>
    )
  }
  