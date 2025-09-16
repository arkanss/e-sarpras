import React from 'react';

const Sidebar = () => {
  const menuItems = [
    'Dashboard',
    'Peminjaman',
    'Pengadaan',
    'Inventarisasi',
    'Pengguna',
    'Usulan',
    'Kerusakan',
    'Penghapusan',
  ];

  return (
    <aside className="sidebar" aria-label="sidebar menu" id="sidebar">
      <div className="brand">
        <img src="/images/logo.png" alt="logo" style={{ width: '150px', height: 'auto' }} />
      </div>

      <nav className="nav" aria-label="main navigation">
        {menuItems.map((item, index) => (
          <a href="#" className={item === 'Dashboard' ? 'active' : ''} title={item} key={index}>
            <img src={`/images/${item}.png`} alt={item} style={{ width: '18px', height: '18px' }} />
            <span className="label">{item}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;