import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Simple Studio"
      description="Documentation for Simple Studio Minecraft plugins"
    >
      <main className={styles.hero}>
        <h1 className={styles.title}>Simple Studio</h1>
        <p className={styles.subtitle}>
          Documentation for powerful Minecraft plugins.
        </p>

        <div className={styles.card}>
          <h2>Intro</h2>
          <p>
            Welcome to the official documentation for Simple Studio Minecraft plugins.<br/>
            Here you will find installation guides, commands, permissions, and examples.
          </p>
          <a className={styles.cardButton} href="/docs/intro">
            Read More
          </a>
        </div>

        <div className={styles.buttons}>
          <a className={styles.buttonPrimary} href="/plugins">
            Get Started
          </a>
          <a className={styles.buttonSecondary} href="/docs">
            View Docs
          </a>
        </div>
      </main>
    </Layout>
  );
}