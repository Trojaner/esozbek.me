import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'
import { PreviewProps } from '../../types/PreviewProps'

const IndexPagePreview = (props: PreviewProps) => {
  const data = props.entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={props.getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
