// Dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Componentes
import App from './App';
import Login from './Login';
import NewEvent from './Newevent';
import Page404 from './Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/new" component={NewEvent} />
            <Route path="/" component={Login} />
            <Route component={Page404} />
        </Switch>
    </App>;

export default AppRoutes;