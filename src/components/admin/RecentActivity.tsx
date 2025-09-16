
import React from 'react';

const RecentActivity = () => {
  return (
    <div className="two-panels">
      <section className="panel" aria-labelledby="rusak-title">
        <div className="head">
          <div>
            <h3 id="rusak-title">Barang Rusak Terbaru</h3>
            <div style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '6px' }}>Pantau barang yang mengalami kerusakan!</div>
          </div>
          <div className="hint" title="Jumlah rusak">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 9v4" stroke="#394b3a" strokeWidth="1.6" strokeLinecap="round" /><path d="M12 17h.01" stroke="#394b3a" strokeWidth="1.6" strokeLinecap="round" /></svg>
            <span style={{ fontWeight: 700 }}>10</span>
          </div>
        </div>

        <div className="list" aria-live="polite">
          <div className="item">
            <div className="meta">
              <div className="name">Proyektor Epson</div>
              <div className="sub">Tidak bisa menyala</div>
            </div>
            <div className="badge yellow">Rusak Ringan</div>
          </div>

          <div className="item">
            <div className="meta">
              <div className="name">Bola Basket</div>
              <div className="sub">Kempes</div>
            </div>
            <div className="badge red">Rusak Berat</div>
          </div>

          <div className="item">
            <div className="meta">
              <div className="name">Sound System</div>
              <div className="sub">Suaranya sember</div>
            </div>
            <div className="badge yellow">Rusak Ringan</div>
          </div>
        </div>

        <div style={{ marginTop: '8px', color: 'var(--muted)', fontWeight: 600 }}>Lihat Semua..</div>
      </section>

      <section className="panel" aria-labelledby="pinjam-title">
        <div className="head">
          <div>
            <h3 id="pinjam-title">Peminjaman Terbaru</h3>
            <div style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '6px' }}>Setujui peminjaman yang diajukan!</div>
          </div>
          <div className="hint" title="Jumlah pinjaman">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2v12M12 14v8" stroke="#394b3a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span style={{ fontWeight: 700 }}>5</span>
          </div>
        </div>

        <div className="list">
          <div className="item">
            <div className="meta">
              <div className="name">Proyektor - Deni Lesmana</div>
              <div className="sub">Tanggal: 27 Jan 2025</div>
            </div>
            <div className="badge yellow">pending</div>
          </div>

          <div className="item">
            <div className="meta">
              <div className="name">Bola Basket - Bayu Kurniawan</div>
              <div className="sub">Tanggal: 4 Apr 2025</div>
            </div>
            <div className="badge yellow">pending</div>
          </div>

          <div className="item">
            <div className="meta">
              <div className="name">Sound System - Arfan</div>
              <div className="sub">Tanggal: 6 Agu 2025</div>
            </div>
            <div className="badge yellow">pending</div>
          </div>
        </div>

        <div style={{ marginTop: '8px', color: 'var(--muted)', fontWeight: 600 }}>Lihat Semua..</div>
      </section>
    </div>
  );
};

export default RecentActivity;
