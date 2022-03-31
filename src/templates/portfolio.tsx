import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet";

interface PortfolioPageTemplateProps {
  title: string;
  content: string;
}
export function PortfolioPageTemplate(props: PortfolioPageTemplateProps) {
  return (
    <section className="section section--gradient">
      <Helmet>
        <title>{props.title} - Enes Sadık Özbek</title>
      </Helmet>
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {props.title}
              </h2>
              <MDXRenderer>{props.content}</MDXRenderer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function PortfolioPage({ data }) {
  const { mdx: post } = data;

  return (
    <Layout>
      <PortfolioPageTemplate
        title={post.frontmatter.title}
        content={post.body}
      />
    </Layout>
  );
};

export const PortfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
