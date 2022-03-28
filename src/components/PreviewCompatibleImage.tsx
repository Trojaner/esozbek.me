import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { CmsImage } from "../types/CdnImage";

interface PreviewCompatibleImageProps {
  alt?: string;
  childImageSharp?: any;
  image: CmsImage;
  style?: object;
}
const PreviewCompatibleImage = (props: PreviewCompatibleImageProps) => {
  const imageStyle = { borderRadius: "5px" };

  const { alt = "", childImageSharp } = props;
  const image: any = props.image;
   
  if (image?.childImageSharp || childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData ?? childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
      />
    );
  } else if (image) {
    return <img style={imageStyle} src={image} alt={alt} />;
  } else {
    return null;
  }
};

export default PreviewCompatibleImage;
