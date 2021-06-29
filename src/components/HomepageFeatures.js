import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    //Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Windy was designed from the ground up to be easily installed and used to
        get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    // Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>Windy lets you focus on your UI. Go ahead and prototype fast.</>
    ),
  },
  {
    title: "Powered by React and Tailwind",
    //Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your app layout by reusing Windy's components and
        Tailwind micro classes.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4 mb-20 md:mb-0")}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} alt={title} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="font-black mb-3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container mt-5 md:mt-32">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
