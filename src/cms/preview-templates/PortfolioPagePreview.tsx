import React from 'react';
import { PortfolioPageTemplate } from '../../templates/portfolio';
import { PreviewProps } from '../../types/PreviewProps';

export default function PortfolioPagePreview(props: PreviewProps) {
  return (
    <PortfolioPageTemplate
      title={props.entry.getIn(['data', 'title'])}
      content={props.widgetFor('body')}
    />
  );
}