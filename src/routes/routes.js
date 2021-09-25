import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../pages';
import { Login } from '../pages/Auth/Login';
import { Register } from '../pages/Auth/Register';
import PrivateRoute from './routes-private';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* ROUTES PRIVATE IN TEST*/}
                <PrivateRoute exact path="/" component={Home} />
                {/* <Route exact path="/" component={Home} /> */}
                {/* AUTH ROUTES */}
                <Route exact path="/auth/login" component={Login} />
                <Route exact path="/auth/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
};
