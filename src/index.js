//Dependencias
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Rutas
import AppRoutes from './routes';

import firebase from 'firebase';
import './index.css';

firebase.initializeApp({
    apiKey: "AIzaSyCwTFWkw8WV5DDyOnFeHbyjMu_nqDpjxYU",
    authDomain: "reactapp-e543d.firebaseapp.com",
    databaseURL: "https://reactapp-e543d.firebaseio.com",
    projectId: "reactapp-e543d",
    storageBucket: "reactapp-e543d.appspot.com",
    messagingSenderId: "466672401841"
});

render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
