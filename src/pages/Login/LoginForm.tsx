import { IonPage, IonContent, IonInput, IonButton } from '@ionic/react'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
    const history = useHistory()

    const handleLogin = () => {
        // Simulasi redirect sesuai role (nanti pakai context atau state)
        history.push('/dashboard/admin')
    }

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <h1>Login</h1>
                <IonInput label="Username" />
                <IonInput label="Password" type="password" />
                <IonButton expand="block" onClick={handleLogin}>
                    Masuk
                </IonButton>
            </IonContent>
        </IonPage>
    )
}

export default LoginForm
