import { height } from "@mui/system";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react"
import { CvPosition } from "../../templates/cv"

interface PositionCardProps {
    position: CvPosition;
    direction: 'left' | 'right';
}
export default function PositionCard(props: PositionCardProps) {
    const directionClass = props.direction == 'left' ? "is-flex-direction-row-reverse" : "is-flex-direction-row";

    return (
        <>
            <div className={"is-flex is-align-content-center is-flex-wrap-wrap " + directionClass}>
                <div style={{ marginLeft: "10px", marginRight: "15px" }}>
                    <img src={props.position.image} style={{maxHeight: "50px", width: "auto"}} />
                </div>
                <div>
                    {props.position.timeline}
                    <br />
                    <b>{props.position.title}</b>
                    <br />
                    {props.position.company}
                </div>
            </div>
        </>
    );
}
