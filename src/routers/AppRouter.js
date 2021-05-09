import { useContext } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { AuthContext } from '../auth/AuthContext'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import LoginScreen from '../components/login/LoginScreen'
import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext)
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuth={logged}
            exact
            path="/login"
            component={LoginScreen}
          />
          <PrivateRoute isAuth={logged} path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
