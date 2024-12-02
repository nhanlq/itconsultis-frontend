import { DrupalParagraph } from "next-drupal"

import { ParagraphPillars } from "components/paragraph--pillars"
// import { ParagraphHighLight } from "components/paragraph--highlight"
// import { ParagraphCoreValue } from "components/paragraph--corevalue"
// import { ParagraphLeaderShip } from "components/paragraph--leadership"

const paragraphTypes = {
  "paragraph--pillars_item": ParagraphPillars,
//   "paragraph--faq": ParagraphFAQ,
//   "paragraph--feature": ParagraphFeature,
//   "paragraph--hero": ParagraphHero,
//   "paragraph--view": ParagraphView,
}

export interface ParagraphProps {
  paragraph: DrupalParagraph
}

export function Paragraph({ paragraph, ...props }: ParagraphProps) {
  if (!paragraph) {
    return null
  }

  const Component = paragraphTypes[paragraph.type]

  if (!Component) {
    return null
  }

  return <Component paragraph={paragraph} {...props} />
}