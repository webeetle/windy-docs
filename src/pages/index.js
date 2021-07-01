import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import { Button } from "@webeetle/windy";
import HomepageFeatures from "../components/HomepageFeatures";
import "tailwindcss/dist/tailwind.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("flex p-5 justify-center items-center")}>
      <div className="w-full md:w-3/4 md:flex justify-center items-center md:space-x-20">
        <div className="w-full md:w-1/2 mb-5 md:mb-0">
          <img className="w-full" src="img/windy-banner.svg" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="hero__title font-black text-green-500 text-6xl mb-5 text-center md:text-left">
            windy
          </h1>
          <p className="hero__subtitle text-black text-center md:text-left">
            A <strong className="text-3xl">React UI Kit</strong>
            <br />
            powered by <strong className="text-3xl">Tailwind</strong>
            <br />
            <Link
              to="/docs/getting_started/start"
              className="hover:no-underline"
            >
              <Button
                color="purple"
                shadow="none"
                size="lg"
                rounded="full"
                gradient={false}
                className="hover:no-underline pl-5 pr-5 pt-4 pb-4 mt-5"
              >
                Start in 3min ⏱️
              </Button>
            </Link>
          </p>
        </div>
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
      <Head>
        <title>Windy | A React UI Kit Powered by Tailwind</title>
        <meta
          name="title"
          content="Windy | A React UI Kit Powered by Tailwind"
        />
        <meta
          name="description"
          content="Start in 3 Minutes with Windy | Copyright © 2021 weBeetle"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://windy-docs.vercel.app" />
        <meta
          property="og:title"
          content="Windy | A React UI Kit Powered by Tailwind"
        />
        <meta
          property="og:description"
          content="Start in 3 Minutes with Windy | Copyright © 2021 weBeetle"
        />
        <meta
          property="og:image"
          content="https://windy-docs.vercel.app/img/windy_banner_site.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://windy-docs.vercel.app" />
        <meta
          property="twitter:title"
          content="Windy | A React UI Kit Powered by Tailwind"
        />
        <meta
          property="twitter:description"
          content="Start in 3 Minutes with Windy | Copyright © 2021 weBeetle"
        />
        <meta
          property="twitter:image"
          content="https://windy-docs.vercel.app/img/windy_banner_site.png"
        />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
