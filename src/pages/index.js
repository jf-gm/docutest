import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import CardsList from '../components/CardsList/CardsList';
import { builtWith, cardsList, codeDescription, codeTextFiles, commandOptions, filenames, treeList } from '../pageData';
import './style.css';
import CardCarousel, { CarouselItem } from '../components/CardCarousel/CardCarousel';
import CodeWindow from '../components/CodeWindow/CodeWindow';

const MySEO = () => (
  <Head>
    <meta property="og:description" content="Simplicity, Agility, and Robustness" />
    <meta charSet="utf-8" />
    <title>Flugzeug</title>
    <meta name="description" content="Simplicity, Agility, and Robustness" data-react-helmet="true"/>
    <link rel="canonical" href="http://mysite.com/example" />
  </Head>
);

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary header-c', styles.heroBanner)}>
      <div className="content">
        <h1 className="title">
          <span className="text">Flugzeug ✈️</span>
        </h1>
        <p className="subtitle">
          <span className="text">
            Simplicity, Agility, and Robustness
          </span>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Flugzeug Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <span className="landing-page">
      <MySEO/>
      <div className="forms-cool top">
      </div>
      <div className="forms-cool bottom">
      </div>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <HomepageHeader />
        <CardsList items={cardsList} />
        <CodeWindow
          commandOptions={commandOptions}
          codeTextFiles={codeTextFiles}
          treeList={treeList}
          filenames={filenames}
          description={codeDescription}
        />
        <h1 style={{textAlign: 'center', marginTop: '3rem', color: '#fafafa'}}>Built with Flugzeug</h1>
        <CardCarousel data={builtWith} />
        <main>
          {/* <HomepageFeatures /> */}
        </main>
      </Layout>
    </span>
  );
}
