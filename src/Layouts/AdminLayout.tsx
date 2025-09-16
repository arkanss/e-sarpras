import { IonPage } from '@ionic/react';
import { ReactNode } from 'react';

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <IonPage>
            {children}
        </IonPage>
    );
}

export default AdminLayout;
