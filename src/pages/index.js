import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import CardsList from '../components/CardsList/CardsList';
import { builtWith, cardsList, codeDescription, codeTextFiles, commandOptions, filenames, treeList } from '../pageData';
import './style.css';
import CardCarousel, { CarouselItem } from '../components/CardCarousel/CardCarousel';
import CodeWindow from '../components/CodeWindow/CodeWindow';

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
        <h1 style={{textAlign: 'center', marginTop: '3rem'}}>Built with Flugzeug</h1>
        <CardCarousel data={builtWith} />
        <main>
          {/* <HomepageFeatures /> */}
        </main>
      </Layout>
    </span>
  );
}
