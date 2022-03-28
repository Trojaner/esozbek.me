import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export function BlogRollTemplate(props: any) {
    const { data } = props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
        <div className="columns is-multiline">
            {posts &&
                posts.map(({ node: post }) => (
                    <div className="is-parent column is-6" key={post.id}>
                        <article
                            className={`blog-list-item tile is-child box notification ${post.frontmatter.featuredpost ? 'is-featured' : ''
                                }`}
                        >
                            <header>
                                {post.frontmatter.featuredimage ? (
                                    <div className="featured-thumbnail">
                                        <PreviewCompatibleImage
                                            image={post.frontmatter.featuredimage}
                                            alt={`Thumbnail for post ${post.frontmatter.title}`}
                                        />
                                    </div>
                                ) : null}
                                <p className="post-meta">
                                    <Link
                                        className="title has-text-primary is-size-4"
                                        to={post.fields.slug}
                                    >
                                        {post.frontmatter.title}
                                    </Link>
                                    <span> &bull; </span>
                                    <span className="subtitle is-size-5 is-block">
                                        {post.frontmatter.date}
                                    </span>
                                </p>
                            </header>
                            <p>
                                {post.excerpt}
                                <br />
                                <br />
                                <Link className="button" to={post.fields.slug}>
                                    Keep Reading →
                                </Link>
                            </p>
                        </article>
                    </div>
                ))}
        </div>
    )
}

export default function BlogRoll() {
    return (
        <StaticQuery
            query={graphql`
                query BlogRollQuery {
                    allMarkdownRemark(
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
                                    templateKey
                                    date(formatString: "MMMM DD, YYYY")
                                    featuredPost
                                    featuredImage {
                                        childImageSharp {
                                            gatsbyImageData(
                                                width: 120
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