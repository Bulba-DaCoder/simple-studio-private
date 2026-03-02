import React from 'react';
import Layout from '@theme/Layout';
import styles from './plugins.module.css';

export default function Plugins() {
  return (
    <Layout title="Plugins" description="All Simple Studio plugins">
      <main className={styles.container}>
        <h1 className={styles.title}>Our Plugins</h1>

        <div className={styles.grid}>
          <a className={styles.card} href="/docs/anti-afk">
            <h2> AntiAFK</h2>
            <p>Detects auto clickers, AFK pools and tons more!!</p>
          </a>

          <a className={styles.card} href="/docs/referrals">
            <h2> Referrals</h2>
            <p>Easily gain more players to your Minecraft server!</p>
          </a>

          <a className={styles.card} href="/docs/zombie-tag">
            <h2> ZombieTag</h2>
            <p>Classic tag game but with a twist!</p>
          </a>

          <a className={styles.card} href="/docs/coinflip">
            <h2> Coinflip</h2>
            <p>Fast paced coinflips, endless fun.</p>
          </a>

          <a className={styles.card} href="/docs/rtpqueue">
            <h2> RTPQueue</h2>
            <p>Optimised and fully configurable RTP Queue/Duel system.</p>
          </a>

          <a className={styles.card} href="/docs/donutadvent">
            <h2> DonutAdvent</h2>
            <p>Advent calendar plugin similar to DonutSMP.</p>
          </a>

          <a className={styles.card} href="/docs/chat-patrol">
            <h2> Chat Patrol</h2>
            <p>Simple chat moderation plugin for your MC server.</p>
          </a>

          <a className={styles.card} href="/docs/donutmenus">
            <h2> DonutMenus</h2>
            <p>DonutSMP replica menus with config & leaderboards.</p>
          </a>
        </div>
      </main>
    </Layout>
  );
}