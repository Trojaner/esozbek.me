import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { CSSProperties } from "react";

interface FullWidthImageProps {
  image: any | string;
  title: string;
  height?: number;
  subheading: string;
  imagePosition?: CSSProperties["objectPosition"];
}
export default function FullWidthImage(props: FullWidthImageProps) {
  const {
    height = 400,
    image,
    title,
    subheading,
    imagePosition = "top left",
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        {image?.url ? (
          <img
            src={image}
            style={{
              gridArea: "1/1",
              objectFit: "cover",
              objectPosition: imagePosition,
              aspectRatio: (3 / 1).toString(),
              height: height,
              width: "100%",
            }}
            alt=""
          />
        ) : (
          <GatsbyImage
            image={image}
            objectFit={"cover"}
            objectPosition={imagePosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: height
            }}
            /*layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            formats={["auto", "webp", "avif"]}
            */
            alt=""
          />
        )}
        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}
            {title && (
              <h1
                className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  lineHeight: "1",
                  padding: "0.25em",
                }}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {subheading && (
              <h3
                className="has-text-weight is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  boxShadow:
                    "rgb(0, 0, 0) 5rem 0px 0px, rgb(0, 0, 0) -5rem 0px 0px",
                  backgroundColor: "rgb(0, 0, 0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                }}
                dangerouslySetInnerHTML={{ __html: subheading }} />
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}