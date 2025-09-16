
import React from 'react';

const DonutChart = () => {
  return (
    <div className="stat-card-large">
      <div className="donut-panel">
        <div className="donut-header">
          <h3>Statistik Barang dan Alat</h3>
          <p>Pantau barang secara keseluruhan!</p>
        </div>

        <div className="donut-area">
          <div className="donut" role="img" aria-label="Donut chart statistik">
            <div className="center">
              <div className="big">500</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Total</div>
            </div>
          </div>

          <div className="legend" aria-hidden="true">
            <div className="row"><span className="swatch a"></span><span>Tersedia</span></div>
            <div className="row"><span className="swatch b"></span><span>Rusak</span></div>
            <div className="row"><span className="swatch c"></span><span>Dipinjam</span></div>
          </div>
        </div>
      </div>

      <div style={{ background: 'transparent' }}></div>
    </div>
  );
};

export default DonutChart;
