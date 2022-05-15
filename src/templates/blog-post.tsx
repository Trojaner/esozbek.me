import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { Disqus } from 'gatsby-plugin-disqus';
import { MDXRenderer } from "gatsby-plugin-mdx";
import useSiteMetadata from "../components/SiteMetadata";

interface BlogPostTemplateProps {
  id?: string;
  content: string;
  description?: string;
  title?: string;
  helmet?: any;
  tags?: string[];
  slug?: string;
}
export const BlogPostTemplate = (props: BlogPostTemplateProps) => {
  return (
    <section className="section">
      {props.helmet}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {props.title}
            </h1>
            <p>{props.description}</p>
            <MDXRenderer>{props.content}</MDXRenderer>
            {props.tags && props.tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {props.tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {props.id &&
              <Disqus
                config={{
                  url: props.slug ? `https://esozbek.me${props.slug}` : null,
                  identifier: props.id,
                  title: props.title
                }}
              />
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default function BlogPost({ data }) {
  const post = data.mdx;
  const siteMetadata = useSiteMetadata();
  
  return (
    <Layout>
      <BlogPostTemplate
        id={post.id}
        content={post.body}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`} | {siteMetadata.title}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta name="author" content="Enes Sadık Özbek" />
          </Helmet>
        }
        slug={post.fields.slug}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
