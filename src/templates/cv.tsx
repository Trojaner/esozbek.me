import { graphql } from "gatsby";
import Layout from "../components/Layout";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from "../components/cv/ExperienceCard";
import { Helmet } from "react-helmet";
import EducationCard from "../components/cv/EducationCard";
import { Rating } from "@mui/material";
import Mailto from 'react-protected-mailto';

export interface CvExperience {
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
    experiences: CvExperience[];
    education: CvEducation[];
    languages: CvLanguage[];
    technologies: string[];
    honors: string[];
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
                            <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {props.title}
                            </h1>
                            <div className="section is-flex is-justify-content-space-between is-flex-wrap-wrap-reverse">
                                <div>
                                    <h2><b>Enes</b> Sadık <b>Özbek</b></h2>
                                    <span>Snr. Software Engineer | Ankara, Turkey </span> <br />
                                    <span><Mailto email='es.ozbek@outlook.com' /></span> <br />
                                    <a href="https://esozbek.me">https://esozbek.me</a>
                                </div>
                                <img src="assets/me.jpg" className="mb-3" style={{ height: "140px", width: "auto", borderRadius: "8px" }}></img>
                            </div>
                            <div className="section mb-3">
                                <h3>Experiences</h3>
                                <Timeline position="alternate">
                                    {
                                        props.experiences.map((experience, i, experiences) => {
                                            return (
                                                <TimelineItem key={`${experience.company}-${experience.timeline}`}>
                                                    <TimelineSeparator>
                                                        <TimelineDot />
                                                        {
                                                            i + 1 != experiences.length &&
                                                            <TimelineConnector />
                                                        }
                                                    </TimelineSeparator>
                                                    <TimelineContent>
                                                        <ExperienceCard direction={i % 2 == 0 ? 'right' : 'left'} experience={experience} />
                                                    </TimelineContent>
                                                </TimelineItem>
                                            )
                                        })
                                    }
                                </Timeline>
                            </div>
                            <div className="section mb-3">
                                <h3>Education</h3>
                                <Timeline position="alternate">
                                    {
                                        props.education.map((education, i, educations) => {
                                            return (
                                                <TimelineItem key={`${education.organization}-${education.timeline}`}>
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
                                                </TimelineItem>)
                                        })
                                    }
                                </Timeline>
                            </div>
                            <div className="section">
                                <div className="columns">
                                    <div className="column is-third">
                                        <h3>Languages</h3>
                                        <div className="is-flex is-flex-direction-column">
                                            {
                                                props.languages.map(x => {
                                                    return <div key={x.name}>
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
                                    <div className="column is-third">
                                        <h3>Technologies</h3>
                                        <ul>
                                            {
                                                props.technologies.map(x => {
                                                    return <li key={x}><b>{x}</b></li>;
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="column is-third">
                                        <h3>Honors & awards</h3>
                                        <ul>
                                            {
                                                props.honors.map(x => {
                                                    return <li key={x}><b>{x}</b></li>;
                                                })
                                            }
                                        </ul>
                                    </div>
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
                experiences={frontmatter.experiences}
                education={frontmatter.education}
                languages={frontmatter.languages}
                technologies={frontmatter.technologies}
                honors={frontmatter.honors}
            />
        </Layout>
    );
};

export const pageQuery = graphql`
    query CvTemplateProps {
      mdx(frontmatter: { templateKey: { eq: "cv" } }) {
        frontmatter {
          title,
          experiences {
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
          },
          technologies,
          honors
        }
      }
    }
  `;
