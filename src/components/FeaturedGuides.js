import React from "react";
import clsx from "clsx";
import styles from "./FeaturedGuides.module.css";
import Link from "@docusaurus/Link";

const FeaturedGuidesList = [
  {
    title: "Get started with Pyomo",
    imgLink: "../../static/img/pyomo.png",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipis, Lorem ipsum dolor sit
        amet, consectetur adipis
      </>
    ),
    link: "/docs/Get%20Started%20guides/Pyomo/pyomo_on_linux",
    status: "ready",
  },
  {
    title: "Get Started with Python",
    imgLink: "../../static/img/python.png",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipis, Lorem ipsum dolor sit
        amet, consectetur adipis
      </>
    ),
    link: "",
    status: "",
  },
  {
    title: "Get Started with GAMS",
    imgLink: "../../static/img/gams.png",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipis, Lorem ipsum dolor sit
        amet, consectetur adipis
      </>
    ),
    link: "",
    status: "",
  },
];

function FeaturedGuide({ Svg, title, description, link, imgLink, status }) {
  let isReady = null;
  if (status) {
    isReady = true;
  } else {
    isReady = false;
  }

  return (
    <div className={clsx("col col--4")}>
      <div className={isReady ? "" : styles.guideContainer}>
        <div className="text--center">
          {/* <Svg className={styles.featureSvg} alt={title} /> */}
          <img src={imgLink} alt={title}></img>
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.buttons}>
            {isReady ? (
              <Link className="button button--secondary button--lg" to={link}>
                Go to Guide - 10min ⏱️
              </Link>
            ) : (
              <Link
                className="button button--secondary button--lg"
                to={link}
                disabled={isReady ? "" : true}
              >
                Coming Soon!
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedGuides() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <h1
            className="hero__title title-section"
            className={styles.sectionTitle}
          >
            Popular Quick Start guides
          </h1>
        </div>

        <div className="row">
          {FeaturedGuidesList.map((props, idx) => (
            <FeaturedGuide key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
