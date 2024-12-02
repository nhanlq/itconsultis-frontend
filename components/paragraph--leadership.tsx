import { DrupalNode } from "next-drupal"
import Image from "next/image"
import { absoluteUrl, formatDate } from "lib/utils"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Responsive.module.css";


interface LeaderShipProps {
    leaderships: DrupalNode
  }

  export function LeaderShipItem({ leaderships, ...props }: LeaderShipProps) {
    return (
            <div className="container">
            <Carousel
              showArrows={true}
              showIndicators={true}
              infiniteLoop={true}
              dynamicHeight={false}
              className={styles.mySwiper}
            >
              {leaderships.map((item) => (
                <div key={item.id} className="slide-item">
                  <div className="slide-image">
                  <Image
                        src={absoluteUrl(item.field_image.uri.url)}
                        width={768}
                        height={480}
                        alt={item.field_image.resourceIdObjMeta.alt}
                      />
                  </div>
                  <div className="slide-detail">
                    <h2>{item.field_title}</h2>
                    <p className="job">{item.field_job}</p>
                    <div className="slide-desc">
                      <div className="about-us_leader__description" dangerouslySetInnerHTML={{ __html: item.field_description.value }}></div>
                  </div>
                  </div>
                 
                </div>
              ))}
            </Carousel>
          </div>


    )
  }
  