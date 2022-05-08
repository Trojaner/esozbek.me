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
import JsPDF, { HTMLOptions } from 'jspdf';
import { CmsImage } from "../types/CdnImage";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import github from "../../static/assets/social/github.png";
import instagram from "../../static/assets/social/instagram.png";
import twitter from "../../static/assets/social/twitter.png";
import linkedin from "../../static/assets/social/linkedin.png";

export interface CvExperience {
    title: string;
    timeline: string;
    image?: CmsImage;
    company: string;
}

export interface CvEducation {
    organization: string;
    description: string;
    timeline: string;
    image?: CmsImage;
}

export interface CvProject {
    name: string;
    description: string;
    link: string;
    image?: CmsImage;
}

export interface CvLanguage {
    name: string;
    level: string;
    stars: number;
}

export interface CvTemplateProps {
    portrait: IGatsbyImageData;
    title: string;
    experiences: CvExperience[];
    education: CvEducation[];
    languages: CvLanguage[];
    technologies: string[];
    honors: string[];
    projects: CvProject[];
}
export const CvTemplate = (props: CvTemplateProps) => {
    const generatePDF = () => {
        const pdf = new JsPDF('portrait', 'px', 'a4');
        const opts: HTMLOptions = {
            fontFaces: [
                {
                    family: 'Roboto',
                    src: [{ url: '/assets/Roboto-Regular.ttf', format: 'truetype' }],
                    weight: 400,
                    stretch: 'normal',
                    style: 'normal'
                },
                {
                    family: 'Roboto',
                    src: [{ url: '/assets/Roboto-Italic.ttf', format: 'truetype' }],
                    weight: 400,
                    stretch: 'normal',
                    style: 'italic'
                },
                {
                    family: 'Roboto',
                    src: [{ url: '/assets/Roboto-Bold.ttf', format: 'truetype' }],
                    weight: 700,
                    stretch: 'normal',
                    style: 'normal'
                }
            ],
            html2canvas: {
                useCORS: true,
                scale: 0.435,
                allowTaint: true,
                backgroundColor: '#fff',
                letterRendering: true
            },
        };

        const firstPage = document.querySelector('#pdfContent-p1') as HTMLElement;

        if (firstPage != null) {
            pdf.html(firstPage, opts)
                .then(() => {
                    pdf.save('Enes Sadık Özbek - CV.pdf');
                });
        }
    }

    return <>
        <section className="section section--gradient">
            <Helmet>
                <title>CV - Enes Sadık Özbek</title>
            </Helmet>
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <div className="is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-wrap">
                                <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                                    {props.title}
                                </h1>
                                <button className="button is-light is-small ml-4" onClick={generatePDF}>Download PDF</button>
                            </div>

                            <div id="pdfContent-p1" className="content">
                                <div className="is-flex is-flex-direction-row is-justify-content-flex-start">
                                    <div className="content is-flex" style={{ flex: 1, marginBottom: 0 }}>
                                        <div className="section has-background-dark">
                                            <GatsbyImage image={props.portrait} alt="Enes Sadık Özbek" style={{ borderRadius: "8px" }} />
                                            <h3 className="has-text-info-light">
                                                About me
                                            </h3>
                                            <div className="has-text-info-light">
                                                Passionate problem solver since over a decade.
                                                Loves developing solutions, fixing bugs and playing the piano.
                                            </div>
                                            <br />
                                            <h3 className="has-text-info-light">
                                                Social Media
                                            </h3>
                                            <div className="has-text-info-light">
                                                <a title="GitHub" href="https://github.com/Trojaner">
                                                    <div className="is-flex is-flex-direction-row is-align-items-center mb-2">
                                                        <img
                                                            src={github}
                                                            alt="GitHub"
                                                            style={{ width: "1.9em", height: "1.9em" }}
                                                        />
                                                        <span className="ml-2 has-text-info-light">@Trojaner</span>
                                                    </div>
                                                </a>
                                                <a title="Twitter" href="https://twitter.com/Trojaner_">
                                                    <div className="is-flex is-flex-direction-row is-align-items-center mb-2">
                                                        <img
                                                            className="fas fa-lg"
                                                            src={twitter}
                                                            alt="Twitter"
                                                            style={{ width: "2.0em", height: "2.0em" }}
                                                        />
                                                        <span className="ml-2 has-text-info-light">@Trojaner_</span>
                                                    </div>
                                                </a>
                                                <a title="Instagram" href="https://instagram.com/es_ozbek">
                                                    <div className="is-flex is-flex-direction-row is-align-items-center mb-2">
                                                        <img
                                                            src={instagram}
                                                            alt="Instagram"
                                                            style={{ width: "2.0em", height: "2.0em" }}
                                                        />
                                                        <span className="ml-2 has-text-info-light">@es_ozbek</span>
                                                    </div>
                                                </a>
                                                <a title="LinkedIn" href="https://linkedin.com/in/esozbek">
                                                    <div className="is-flex is-flex-direction-row is-align-items-center">
                                                        <img
                                                            src={linkedin}
                                                            alt="LinkedIn"
                                                            style={{ width: "2.0em", height: "2.0em" }}
                                                        />
                                                        <span className="ml-2 has-text-info-light">/in/esozbek</span><br />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ flex: 4 }}>
                                        <div className="section is-flex is-justify-content-space-between is-flex-wrap-wrap-reverse">
                                            <div>
                                                <h2 className="title is-1"><b>Enes</b> Sadık <b>Özbek</b></h2>
                                                <span>Senior Software Engineer | Ankara, Turkey </span> <br />
                                                <span><Mailto email='es.ozbek@outlook.com' /></span> <br />
                                                <a href="https://esozbek.me">https://esozbek.me</a>
                                            </div>
                                        </div>
                                        <div className="section">
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
                                        <div className="section">
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
                                                                return <li key={x}>&nbsp;<b>{x}</b></li>;
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="column is-third">
                                                    <h3>Honors &amp; Awards</h3>
                                                    <ul>
                                                        {
                                                            props.honors.map(x => {
                                                                return <li key={x}>&nbsp;<b>{x}</b></li>;
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
                portrait={data.file.childImageSharp.gatsbyImageData}
                title={frontmatter.title}
                experiences={frontmatter.experiences}
                education={frontmatter.education}
                languages={frontmatter.languages}
                technologies={frontmatter.technologies}
                honors={frontmatter.honors}
                projects={frontmatter.projects}
            />
        </Layout>
    );
};

export const pageQuery = graphql`
    query CvTemplateProps {
        file(relativePath: { eq: "me.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    formats: [PNG]
                    height: 160
                    quality: 100
                    layout: FIXED
                )
            }
        }

        mdx(frontmatter: { templateKey: { eq: "cv" } }) {
            frontmatter {
                title
                experiences {
                    title
                    timeline
                    image {
                        childImageSharp {
                            gatsbyImageData(
                            formats: [PNG]
                            height: 50
                            quality: 100
                            layout: FIXED
                            )
                        }
                    }
                    company
                }
                education {
                    organization
                    description
                    timeline
                    image {
                        childImageSharp {
                            gatsbyImageData(
                                formats: [PNG]
                                height: 50
                                quality: 100
                                layout: FIXED
                            )
                        }
                    }
                }
                languages {
                    name
                    level
                    stars
                }
                technologies
                honors
                projects {
                    name
                    description
                    link
                    image {
                        childImageSharp {
                                gatsbyImageData(
                                formats: [PNG]
                                height: 50
                                quality: 100
                                layout: FIXED
                            )
                        }
                    }
                }
            }
        }
    }
    `;
