import React from 'react';
import Layout from '@theme/Layout';
import styles from './pluginPage.module.css';

export default function AntiAfk() {
  return (
    <Layout title="AntiAFK">
      <div className={styles.page}>

        <nav className={styles.index}>
          <a href="#info">Information</a>
          <a href="#commands">Commands</a>
          <a href="#config">Config</a>
        </nav>

        <section id="info">
          <h1>AntiAFK</h1>
          <p>Detects auto clickers, afk pools and tons more.</p>
        </section>

        <section id="commands">
          <h2>Commands</h2>
          <ul>
            <li>/antiafk reload</li>
            <li>/antiafk status</li>
          </ul>
        </section>

        <section id="config">
          <h2>Config</h2>
          <pre>
{`afk-time: 300
kick-enabled: true`}
          </pre>
        </section>

      </div>
    </Layout>
  );
}