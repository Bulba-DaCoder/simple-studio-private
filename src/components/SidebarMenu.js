import React, { useState } from 'react';
import Link from '@docusaurus/Link';

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        left: open ? '0' : '-160px',
        top: '0',
        height: '100vh',
        width: '200px',
        background: 'rgba(20,20,20,0.95)',
        color: 'white',
        transition: 'left 0.3s ease',
        zIndex: 1000,
        paddingTop: '80px',
        boxShadow: '0 0 20px rgba(143,0,255,0.5)'
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'absolute',
          right: '-40px',
          top: '20px',
          width: '40px',
          height: '40px',
          background: '#8f00ff',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          borderRadius: '0 8px 8px 0',
        }}
      >
        ☰
      </button>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/plugins">Plugins</Link>
        <Link to="/plugins/antiafk">AntiAFK</Link>
        <Link to="/plugins/referrals">Referrals</Link>
        <Link to="/plugins/zombietag">ZombieTag</Link>
        <Link to="/plugins/coinflip">Coinflip</Link>
      </nav>
    </div>
  );
}