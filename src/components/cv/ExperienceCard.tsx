import { height } from "@mui/system";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react"
import { CvExperience } from "../../templates/cv"

interface PositionCardProps {
    experience: CvExperience;
    direction: 'left' | 'right';
}
export default function ExperienceCard(props: PositionCardProps) {
    const directionClass = props.direction == 'left' ? "is-flex-direction-row-reverse" : "is-flex-direction-row";

    return (
        <>
            <div className={"is-flex is-align-content-center is-flex-wrap-wrap " + directionClass}>
                {
                    props.experience.image &&
                    <div style={{ marginLeft: "10px", marginRight: "15px" }}>
                        <GatsbyImage image={props.experience.image.childImageSharp.gatsbyImageData} alt={props.experience.company} />
                    </div>
                }
                <div>
                    {props.experience.timeline}
                    <br />
                    <b>{props.experience.title}</b>
                    <br />
                    {props.experience.company}
                </div>
            </div>
        </>
    );
}
