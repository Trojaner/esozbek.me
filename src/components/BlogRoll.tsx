import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import moment from 'moment';
import { GatsbyImage } from 'gatsby-plugin-image';

export function BlogPostPreview(props: any) {
    const { post } = props;

    return (
        <>
            <article
                className={`blog-list-item box notification is-primary ${post.frontmatter.featuredPost ? 'is-featured' : ''
                    }`}
            >
                <header className="is-flex is-justify-content-space-between is-flex-direction-row is-flex-wrap-wrap">
                    <div style={{ paddingRight: "15px", paddingTop: "15px", flex: "1" }}>
                        <p>
                            <Link
                                className="title has-text-secondary is-size-4"
                                to={post.fields.slug}
                            >
                                {post.frontmatter.title}
                            </Link>
                            <span> &nbsp; </span>
                            <span className="subtitle is-size-6 is-block">
                                {moment(post.frontmatter.date).format('LL')}
                            </span>
                        </p>
                    </div>
                    {post.frontmatter.featuredImage && (
                        <div className="featured-thumbnail is-flex is-justify-content-space-between is-flex-direction-row-reversed" style={{ paddingTop: "15px" }}>
                            <div/>
                            <GatsbyImage
                                style={{borderRadius: "5px"}}
                                image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                                alt={`Thumbnail for post ${post.frontmatter.title}`}
                            />
                        </div>
                    )}
                </header>
                <p>
                    {post.frontmatter.description}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                        Keep Reading →
                    </Link>
                </p>
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