import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

export default function TagRoute(props: any) {
  const posts = props.data.allMdx.edges;
  const postLinks = posts.map((post, i, row) => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2 className="is-size-2">{post.node.frontmatter.title}
          {
            i + 1 !== row.length &&
            ","
          }
        </h2>
      </Link>
    </li>
  ));
  
  const tag = props.pageContext.tag;
  const title = props.data.site.siteMetadata.title;
  const totalCount = props.data.allMdx.totalCount;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with “${tag}”`;

  return (
    <Layout>
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
              <ul className="taglist">{postLinks}</ul>
              <p>
                <Link to="/tags/">Browse all tags</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
