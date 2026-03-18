import React from 'react';
import Layout from '@theme/Layout';
import styles from './pluginPage.module.css';
import SidebarMenu from '../../components/SidebarMenu';

export default function AntiAfk() {
  return (
    <Layout title="AntiAFK">
      <SidebarMenu />

      {/* TELEPORTER (ALWAYS OPEN, RIGHT SIDE) */}
      <div className={styles.teleporter}>
        <nav className={styles.index}>
          <a href="#introduction">Introduction</a>
          <a href="#permissions">Permissions</a>
          <a href="#config">Configuration Files</a>
          <a href="#placeholders">Placeholders</a>
        </nav>
      </div>

      <main className={styles.page}>
        {/* INTRO */}
        <section id="introduction">
          <h1>AntiAFK</h1>
          <p>Detects auto clickers, AFK pools and tons more.</p>
        </section>

        {/* PERMISSIONS */}
        <section id="permissions">
          <h2>Permissions</h2>
          <ul>
            <li>antiafk.bypass</li>
            <li>antiafk.reload</li>
          </ul>
        </section>

        {/* CONFIG */}
        <section id="config">
          <h2>Configuration Files</h2>
          <pre>
{`afk-time: 300
kick-enabled: true`}
          </pre>
        </section>

        {/* PLACEHOLDERS */}
        <section id="placeholders">
          <h2>Placeholders</h2>
          <ul>
            <li>%antiafk_status%</li>
            <li>%antiafk_time%</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}