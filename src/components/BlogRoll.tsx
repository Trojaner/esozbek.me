import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import moment from 'moment';
import { CommentCount } from 'gatsby-plugin-disqus'

export function BlogPostPreview(props: any) {
    const { post } = props;

    return (
        <>
            <div className="is-parent column is-10" key={post.id}>
                <article
                    className={`blog-list-item tile is-child box notification is-primary ${post.frontmatter.featuredPost ? 'is-featured' : ''
                        }`}
                >
                    <header>
                        <p className="post-meta">
                            <Link
                                className="title has-text-secondary is-size-4"
                                to={post.fields.slug}
                            >
                                {post.frontmatter.title}
                            </Link>
                            <span> &nbsp; </span>
                            <span className="subtitle is-size-6 is-block">
                                {moment(post.frontmatter.date).format('LL')}
                                &nbsp;
                                &bull;
                                &nbsp;
                                <CommentCount
                                    config={{
                                        url: `https://esozbek.me/${post.fields.slug}`,
                                        identifier: post.id,
                                        title: post.frontmatter.title
                                    }}
                                />
                            </span>
                        </p>
                        {post.frontmatter.featuredImage && (
                            <div className="featured-thumbnail">
                                <PreviewCompatibleImage
                                    image={post.frontmatter.featuredImage}
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
            </div>
            <div className="column is-2"></div>
        </>
    );
}

export function BlogRollTemplate(props: any) {
    const { data } = props;
    const { edges: posts } = data.allMarkdownRemark;

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
                                    description
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