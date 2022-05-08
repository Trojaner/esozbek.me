import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { CmsImage } from "../types/CdnImage";

export interface FeatureGridItem {
  image: CmsImage;
  text: string;
}

export interface FeatureGridProps {
  gridItems: FeatureGridItem[];
}

const FeatureGrid = (props: FeatureGridProps) => (
  <div className="columns is-multiline">
    {props.gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: "240px",
                display: "inline-block",
              }}
            >
              <GatsbyImage alt={""} {...item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

export default FeatureGrid;
