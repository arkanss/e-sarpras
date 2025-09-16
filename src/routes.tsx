import { Route, Redirect } from 'react-router-dom'
import Login from '@/pages/Login/LoginForm'
import DashboardAdmin from './pages/Admin/DashboardAdmin'

const AppRoutes = () => {
    return (
        <>
            {/* Login Step */}
            <Route exact path="/login" component={Login} />

            {/* Dashboard by Role */}
            <Route exact path="/admin/home" component={DashboardAdmin} />
            {/* <Route exact path="/student/home" component={DashboardStudent} /> */}
            
            {/* menu Admin */}
            {/* <Route exact path="/admin/test" component={test} /> */}


            {/* Redirect Default */}
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
        </>
    )
}

export default AppRoutes
