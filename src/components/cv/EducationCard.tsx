import { GatsbyImage } from "gatsby-plugin-image";
import React from "react"
import { CvEducation } from "../../templates/cv"

interface EducationCardProps {
    education: CvEducation;
    direction: 'left' | 'right';
}
export default function EducationCard(props: EducationCardProps) {
    const directionClass = props.direction == 'left' ? "is-flex-direction-row-reverse" : "is-flex-direction-row";

    return (
        <>
            <div className={"is-flex is-align-content-center is-flex-wrap-wrap " + directionClass}>
                {
                    props.education.image && 
                    <div style={{ marginLeft: "10px", marginRight: "15px" }}>
                        <GatsbyImage image={props.education.image.childImageSharp.gatsbyImageData} alt={props.education.organization} />
                    </div>
                }
                <div>
                    {props.education.timeline}
                    <br />
                    <b>{props.education.description}</b>
                    <br />
                    {props.education.organization}
                </div>
            </div>
        </>
    );
}
