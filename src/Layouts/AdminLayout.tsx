import { IonPage } from '@ionic/react';
import { ReactNode } from 'react';
import Sidebar from '@/components/admin/Sidebar';

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <IonPage>
            <div className="app">
                <button className="menu-toggle" aria-label="Toggle menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
                <div className="overlay" id="overlay"></div>
                <Sidebar />
                {children}
            </div>
        </IonPage>
    );
}

export default AdminLayout;