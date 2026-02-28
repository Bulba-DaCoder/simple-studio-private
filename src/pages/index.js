import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Simple Studio Docs" description="Minecraft plugin documentation">
      <main className={styles.hero}>
        <h1 className={styles.title}>Simple Studio</h1>
        <p className={styles.subtitle}>
          Majestic documentation for powerful Minecraft plugins.
        </p>

        <div className={styles.buttons}>
          <a className={styles.buttonPrimary} href="/docs/intro">
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