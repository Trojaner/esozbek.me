import { graphql } from "gatsby";
import Layout from "../components/Layout";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PositionCard from "../components/cv/PositionCard";
import { Helmet } from "react-helmet";
import EducationCard from "../components/cv/EducationCard";
import { Rating } from "@mui/material";

export interface CvPosition {
    title: string;
    timeline: string;
    image: string;
    company: string;
}

export interface CvEducation {
    organization: string;
    description: string;
    timeline: string;
    image: string;
}

export interface CvLanguage {
    name: string;
    level: string;
    stars: number;
}

export interface CvTemplateProps {
    title: string;
    positions: CvPosition[];
    education: CvEducation[];
    languages: CvLanguage[];
}
export const CvTemplate = (props: CvTemplateProps) => {


    return <>
        <section className="section section--gradient">
            <Helmet>
                <title>CV - Enes Sadık Özbek</title>
            </Helmet>
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {props.title}
                            </h2>
                            <div className="section">
                                <h3>Positions</h3>
                                <Timeline position="alternate">
                                    {
                                        props.positions.map((position, i, positions) => {
                                            return (<>
                                                <TimelineItem>
                                                    <TimelineSeparator>
                                                        <TimelineDot />
                                                        {
                                                            i + 1 != positions.length &&
                                                            <TimelineConnector />
                                                        }
                                                    </TimelineSeparator>
                                                    <TimelineContent>
                                                        <PositionCard direction={i % 2 == 0 ? 'right' : 'left'} position={position} />
                                                    </TimelineContent>
                                                </TimelineItem>
                                            </>)
                                        })
                                    }
                                </Timeline>
                            </div>
                            <div className="section">
                                <h3>Education</h3>
                                <Timeline position="alternate">
                                    {
                                        props.education.map((education, i, educations) => {
                                            return (<>
                                                <TimelineItem>
                                                    <TimelineSeparator>
                                                        <TimelineDot />
                                                        {
                                                            i + 1 != educations.length &&
                                                            <TimelineConnector />
                                                        }
                                                    </TimelineSeparator>
                                                    <TimelineContent>
                                                        <EducationCard direction={i % 2 == 0 ? 'right' : 'left'} education={education} />
                                                    </TimelineContent>
                                                </TimelineItem>
                                            </>)
                                        })
                                    }
                                </Timeline>
                            </div>
                            <div className="section">
                                <h3>Languages</h3>
                                <div className="is-flex is-flex-direction-column">
                                    {
                                        props.languages.map(x => {
                                            return <div className="">
                                                <div>
                                                    <b>{x.name}</b>: {x.level}
                                                </div>
                                                <Rating value={x.stars} readOnly size="small" precision={0.5} />
                                                <br />
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}

export default function IndexPage({ data }) {
    const { frontmatter } = data.mdx;

    return (
        <Layout>
            <CvTemplate
                title={frontmatter.title}
                positions={frontmatter.positions}
                education={frontmatter.education}
                languages={frontmatter.languages}
            />
        </Layout>
    );
};

export const pageQuery = graphql`
    query CvTemplateProps {
      mdx(frontmatter: { templateKey: { eq: "cv" } }) {
        frontmatter {
          title,
          positions {
            title,
            timeline,
            image,
            company
          },
          education {
            organization,
            description,
            timeline,
            image
          },
          languages {
              name,
              level,
              stars
          }
        }
      }
    }
  `;
