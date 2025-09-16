
import React from 'react';

const Stats = () => {
  return (
    <div className="stats-row" role="region" aria-label="metrics">
      <div className="stat-card">
        <div className="stat-icon" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 7l9 5 9-5" stroke="#12351f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div className="stat-text">
          <div className="title">Barang dan Alat</div>
          <div className="number">500</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 2v12M12 14v8" stroke="#12351f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div className="stat-text">
          <div className="title">Barang dipinjam</div>
          <div className="number">20</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M7 6h10M7 18h10" stroke="#12351f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div className="stat-text">
          <div className="title">Barang Tersedia</div>
          <div className="number">130</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 2l7 4v6a7 7 0 0 1-14 0V6l7-4z" stroke="#12351f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div className="stat-text">
          <div className="title">Barang Rusak</div>
          <div className="number">45</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
