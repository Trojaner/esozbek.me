import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'
import { PreviewProps } from '../../types/PreviewProps'

export default function BlogPostPreview (props: PreviewProps) {
  const tags = props.entry.getIn(['data', 'tags'])
  return (
    <BlogPostTemplate
      content={props.widgetFor('body')}
      description={props.entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={props.entry.getIn(['data', 'title'])}
    />
  )
}
