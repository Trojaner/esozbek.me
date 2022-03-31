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
  mainpitch?: any,
  description?: string,
  intro?: IndexIntro;
}
export function IndexPageTemplate(props: IndexPageTemplateProps) {
  const heroImage = (props.image as ImageDataLike) ? getImage(props.image as ImageDataLike) : props.image;

  return (
    <div>
      <FullWidthImage image={heroImage} title={props.title || ""} subheading={props.subheading || ""} />
      <section className="section section--gradient section-index">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{props.mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{props.mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {props.heading}
                      </h3>
                      <p>{props.description}</p>
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
                    <div className="column is-12 has-text-centered">
                      <Link className="button is-outlined" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
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
        mainpitch={frontmatter.mainpitch}
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
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image,
            text
          }
          heading
          description
        }
      }
    }
  }
`;
