import React from "react";
import { Link, graphql } from "gatsby";
import { getImage, ImageDataLike } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features, { FeatureGridItem } from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import { CmsImage } from "../types/CdnImage";

interface IndexIntro {
  blurbs?: FeatureGridItem[];
}
interface IndexPageTemplateProps {
  image?: CmsImage;
  title?: string,
  heading?: string,
  subheading?: string,
  description?: string,
  intro?: IndexIntro;
}
export function IndexPageTemplate(props: IndexPageTemplateProps) {
  const heroImage = (props.image as ImageDataLike) ? getImage(props.image as ImageDataLike) : props.image;

  return (
    <div>
      <FullWidthImage image={heroImage} title={props.title || ""} subheading={props.heading || ""} />
      <section className="section section--gradient section-index">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                      {props.subheading}
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html: props.description ?? "" }}></p>
                  </div>
                </div>
                {
                  props.intro?.blurbs && props.intro.blurbs.length > 0 &&
                  <Features gridItems={props.intro?.blurbs as FeatureGridItem[]} />
                }
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest Blog Posts
                  </h3>
                  <BlogRoll />
                  <div className="column is-9 has-text-centered">
                    <Link className="button is-outlined is-pulled-right	" to="/blog">
                      Read more
                    </Link>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default function IndexPage({ data }) {
  const { frontmatter } = data.mdx;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexPageTemplate {
    mdx(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title,
        heading
        subheading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(
                    height: 300
                    quality: 100
                    layout: CONSTRAINED
                  )
              }
            }
            text
          }
        }
      }
    }
  }
`;
