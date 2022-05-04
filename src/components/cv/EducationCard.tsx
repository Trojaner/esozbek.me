import { height } from "@mui/system";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react"
import { CvEducation, CvPosition } from "../../templates/cv"

interface EducationCardProps {
    education: CvEducation;
    direction: 'left' | 'right';
}
export default function EducationCard(props: EducationCardProps) {
    const directionClass = props.direction == 'left' ? "is-flex-direction-row-reverse" : "is-flex-direction-row";

    return (
        <>
            <div className={"is-flex is-align-content-center is-flex-wrap-wrap " + directionClass}>
                <div style={{ marginLeft: "10px", marginRight: "15px" }}>
                    <img src={props.education.image} style={{maxHeight: "50px", width: "auto"}} />
                </div>
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
