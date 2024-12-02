import { DrupalNode } from "next-drupal"
import Image from "next/image"
import { absoluteUrl, formatDate } from "lib/utils"


interface CoreValueProps {
    item: DrupalNode
  }

  export function CoreValueItem({ item, ...props }: CoreValueProps) {
    return (
      <div className="about-us_core-value__IfXkD">
            <div className="about-us_core-value__logo__iE6hl">
            
                <figure className="my-4">
                    <Image
                      src={absoluteUrl(item.field_image.uri.url)}
                      width={768}
                      height={480}
                      alt={item.field_image.resourceIdObjMeta.alt}
                    />
                  </figure>
        
            </div>
            <div className="high-item-detail">
              <h3 className="highlight-title">{item.field_title}</h3>
              <div className="about-us_highlight__description" dangerouslySetInnerHTML={{ __html: item.field_description.value }}></div>
            </div>
        </div>
    )
  }
  