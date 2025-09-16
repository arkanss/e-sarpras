
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      
      <div className="greeting">
        <h1>Hai, Deni Lesmana</h1>
        <p>Mari kelola inventaris dengan mudah!</p>
      </div>
      
      <div className="profile">
        <button className="bell" title="Notifikasi" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>
        <div className="info">
          <div className="name">Deni Lesmana</div>
          <div style={{ color: 'var(--muted)', fontSize: '12px' }}>Admin</div>
        </div>
        
        <div className="avatar">
          <img src="https://i.pravatar.cc/120" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
