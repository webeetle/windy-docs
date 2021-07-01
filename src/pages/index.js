import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import { Button } from "@webeetle/windy";
import HomepageFeatures from "../components/HomepageFeatures";
import "tailwindcss/dist/tailwind.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero hero--primary",
        "bg-gradient-to-l from-indigo-500 to-indigo-700",
        styles.heroBanner
      )}
    >
      <div className="container">
        <h1 className="hero__title font-black mb-5">{siteConfig.title}</h1>
        <p className="hero__subtitle mb-10">{siteConfig.tagline}</p>
        <Link to="/docs/getting_started/start" className="hover:no-underline">
          <Button
            color="green"
            shadow="xl"
            size="lg"
            className="hover:no-underline pl-5 pr-5 pt-4 pb-4"
          >
            Start with Windy - 3min ⏱️
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
