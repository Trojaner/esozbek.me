import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";

interface PortfolioPageTemplateProps {
  title: string;
  content: string;
  contentComponent?: React.ComponentType<any>;
}
export function PortfolioPageTemplate (props: PortfolioPageTemplateProps) {
  const PageContent = props.contentComponent || HTMLContent;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {props.title}
              </h2>
              <PageContent className="content" content={props.content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function PortfolioPage ({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PortfolioPageTemplate
        title={post.frontmatter.title}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

export const PortfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
