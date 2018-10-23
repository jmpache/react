import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import Navbar from './Navbar';

class Login extends Component {
    constructor () {
      super();
      this.state = {
        user: null
      };
      
      this.handleAuth = this.handleAuth.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    }
  
    componentWillMount () {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({
          user: user
        });
      })
    }
  
    handleAuth () {
      const provider = new firebase.auth.GoogleAuthProvider();
  
      firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`))
    }
  
    handleLogout () {
      firebase.auth().signOut()
        .then(result => console.log(`${result.user.email} ha salido`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`))
    }
  
    renderLogin () {
      if (this.state.user) {
        return (
          <div>
            <img src={this.state.user.photoURL} className="card-img-top mt-3" alt={this.state.user.displayName} />
            <div className="card-header row">
              <h5 className="card-title col-11"> Hola {this.state.user.displayName}!</h5>
              <a href="#" onClick={this.handleLogout}><i className="fas fa-sign-out-alt" title="Logout"></i></a>
            </div>
            <div className="card-body">
              <a href="/new" className="btn btn-primary btn-lg">Crea un evento</a>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div className="card-header">
              <h5 className="card-title"> Bienvenido!</h5>
            </div>
            <div className="card-body">
              Esto es una descripcion
            </div>
            <button onClick={this.handleAuth} className="btn btn-primary mb-3">Login con Google</button>
          </div>
        );
      }
    }
  
    render() {
      return (
          <div className="App">
            <Navbar usrImg={this.state.user.photoURL}/>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="card col-3 mt-5">
                  { this.renderLogin() }
                </div>
              </div>
            </div>
          </div>
      );
    }
  }
  
  export default Login;