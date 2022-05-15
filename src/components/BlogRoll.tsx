import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import moment from 'moment';
import { GatsbyImage } from 'gatsby-plugin-image';

export function BlogPostPreview(props: any) {
    const { post } = props;

    return (
        <>
            <article
                className={`blog-list-item box notification ${post.frontmatter.featuredPost ? 'is-featured' : ''
                    }`}
            >
                <header className="is-flex is-justify-content-space-between is-flex-direction-row-reverse is-flex-wrap-wrap-reverse">
                    <div style={{ paddingRight: "5px", paddingTop: "15px", flex: "1" }}>
                        <p style={{marginBottom: 0}}>
                            <Link
                                className="title has-text-secondary is-size-4"
                                to={post.fields.slug}
                                style={{textDecoration: 'none'}}
                            >
                                {post.frontmatter.title}
                            </Link>
                        </p>
                        <p>
                            {post.frontmatter.description}
                        </p>
                        <div style={{ paddingTop: "15px" }}>
                            <Link className="button is-pulled-right" to={post.fields.slug}>
                                Keep Reading →
                            </Link>
                        </div>
                    </div>
                    {post.frontmatter.featuredImage && (
                        <div className="featured-thumbnail is-flex is-flex-direction-row-reversed" style={{ paddingRight: "15px" }}>
                            <GatsbyImage
                                style={{borderRadius: "5px"}}
                                objectFit="contain"
                                image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                                alt={`Thumbnail for post ${post.frontmatter.title}`}
                            />
                        </div>
                    )}
                </header>
            </article>
        </>
    );
}

export function BlogRollTemplate(props: any) {
    const { data } = props;
    const { edges: posts } = data.allMdx;

    return (
        <div className="columns is-multiline">
            {posts &&
                posts.map(({ node: post }) => (
                    <BlogPostPreview key={post.id} post={post} />
                ))}
        </div>
    )
}

export default function BlogRoll() {
    return (
        <StaticQuery
            query={graphql`
                query BlogRollQuery {
                    allMdx(
                        sort: { order: DESC, fields: [frontmatter___date] }
                        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
                    ) {
                        group(field: frontmatter___tags) {
                            fieldValue
                            totalCount
                        },
                        edges {
                            node {
                                excerpt(pruneLength: 400)
                                id
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                    description
                                    templateKey
                                    date(formatString: "MMMM DD, YYYY")
                                    featuredPost
                                    featuredImage {
                                        childImageSharp {
                                            gatsbyImageData(
                                                width: 200
                                                quality: 100
                                                layout: CONSTRAINED
                                            )
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={(data: any) => <BlogRollTemplate data={data} />}
        />
    );
}