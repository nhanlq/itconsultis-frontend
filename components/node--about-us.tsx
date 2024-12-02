import Image from "next/image"
import { DrupalNode } from "next-drupal"
import { absoluteUrl, formatDate } from "lib/utils"
import {ParagraphPillars} from "components/paragraph--pillars"
import {HighlightItem} from "components/paragraph--highlight"
import {CoreValueItem} from "components/paragraph--core-value"
import {LeaderShipItem} from "components/paragraph--leadership"


interface NodeAboutUsProps {
  node: DrupalNode
}

export function NodeAboutUs({ node, ...props }: NodeAboutUsProps) {
 // console.log(node);

  return (
    <article {...props} className="about-us_wrapper__upZ93">
      <h1 className="mb-4 text-6xl font-black leading-tight">{node.title}</h1>
     
      <section className={`about-us_head__xtmIM center ${node.field_text.field_background_color}`}>
          <h1>{node.field_text.field_title}</h1>
          <div className="about-us_head__description__NpgaN"  dangerouslySetInnerHTML={{ __html: node.field_text.field_description.value }}></div>
      </section>
      <section className="about-us_pillars__LIKj6">
        <h1>{node.field_pillars_title}</h1>
        <div className="about-us_pillars__description__rcWRh" dangerouslySetInnerHTML={{ __html: node.field_pillars_description.value }}></div>
      
        <div className="about-us_pillars__list__U6O_U">
          {node.field_pillars.map((pillar: any)=>(
              <ParagraphPillars key={pillar.id} paragraph={pillar} />
          ))}            
        </div>
        <div className="about-us_pillars__cta__mjrjd">
        <a className="buttons_darkButton__MBfed" href={`${node.field_pillars_link.uri}`}>{node.field_pillars_link.title}</a>
        </div>
      </section>
       <section className="about-us_achievement__section__jZQTd">
       {node.field_highlight.map((item: any)=>(
                <HighlightItem  key={item.id} item={item} />
            ))}   
       </section>
       <section className="about-us_core-values__Ea5gD">
       <h1>{node.field_core_values_title}</h1>
        <div className="about-us_pillars__description" dangerouslySetInnerHTML={{ __html: node.field_core_values_description.value }}></div>
            <div className="about-us_core-values__values__yR84U">
              {node.field_core_values.map((item: any)=>(
                        <CoreValueItem key={item.id} item={item} />
                    ))}
            </div>   
       </section>
       <section className="leadership-wrapper">
          <h1 className="leadertitle">{node.field_leadership_title}</h1>
            <LeaderShipItem leaderships={node.field_leadership}/>
       </section>
     
    </article>
  )
}
