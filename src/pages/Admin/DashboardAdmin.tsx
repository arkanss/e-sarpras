import React, { useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import Header from '@/components/admin/Header';
import Stats from '@/components/admin/Stats';
import RecentActivity from '@/components/admin/RecentActivity';
import DonutChart from '@/components/admin/DonutChart';
import '@/components/admin/Dashboard.css';

const DashboardAdmin = () => {

    useEffect(() => {
        const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        const toggleSidebar = () => {
            sidebar?.classList.toggle('active');
            if (overlay) {
                overlay.style.display = sidebar?.classList.contains('active') ? 'block' : 'none';
            }
            menuToggle?.classList.toggle('hidden', sidebar?.classList.contains('active') || false);
            document.body.style.overflow = sidebar?.classList.contains('active') ? 'hidden' : '';
        };

        menuToggle?.addEventListener('click', toggleSidebar);
        overlay?.addEventListener('click', toggleSidebar);

        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    toggleSidebar();
                }
            });
        });

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                sidebar?.classList.remove('active');
                if (overlay) {
                    overlay.style.display = 'none';
                }
                menuToggle?.classList.remove('hidden');
                document.body.style.overflow = '';
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            menuToggle?.removeEventListener('click', toggleSidebar);
            overlay?.removeEventListener('click', toggleSidebar);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <AdminLayout>
            <main className="main">
                <Header />
                <hr className="sep" />
                <div className="toolbar">
                    <div className="left-tools">
                        <button className="btn-filter" title="Filter">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ opacity: .9 }}><path d="M3 5h10M14 19h7M8 12h13M6 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM21 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke="var(--green-700)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Filter
                        </button>

                        <div className="search" role="search">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="#6b6f6b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="11" cy="11" r="6" stroke="#6b6f6b" strokeWidth="1.6" /></svg>
                            <input placeholder="Search" aria-label="search" />
                        </div>
                    </div>

                    <div className="right-tools">
                        <button className="export" title="Export Excel">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3v12" stroke="white" strokeWidth="1.6" strokeLinecap="round" /><path d="M8 11l4 4 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Export Excel
                        </button>
                        <button className="export" title="Export PDF">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 2h8l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Export PDF
                        </button>
                    </div>
                </div>
                <Stats />
                <RecentActivity />
                <DonutChart />
            </main>
        </AdminLayout>
    );
}

export default DashboardAdmin;