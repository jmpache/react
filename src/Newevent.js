// Dependencias
import React, { Component } from 'react';

class About extends Component {
    constructor () {
        super ();
        this.state = {
            personas: [
                {
                    nombre: 'John Doe',
                    pusoTanto: '20',
                    debe: '',
                    paga: ''
                },
                {
                    nombre: 'Pablo Doe',
                    pusoTanto: '60',
                    debe: '',
                    paga: ''
                },
                {
                    nombre: 'Just Doe',
                    pusoTanto: '90',
                    debe: '',
                    paga: ''
                }
            ]
        }
    }

    render() {
        const personas = this.state.personas.map((persona, i) => {
            return (
                <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                        <div className="card-title text-center mt-3">
                            <h3>{persona.nombre}</h3>
                        </div>
                        <div className="card-body">
                            $ {persona.pusoTanto}
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger">
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )
        });


        return (
            <div className="About">
                <div className="container">
                    <div className="jumbotron mt-4">
                        <h1 className="display-4">Agrega personas</h1>
                        <p className="lead">Agrega a las personas que pondran el dinero seguido de la cantidad total de participantes. Lo siguiente que debes hacer es dar click a calcular!</p>
                        <hr className="my-4" />
                        <div className="row">
                            {personas}
                        </div>
                        <hr className="my-4" />
                            <input type="text" placeholder="Cantidad de participantes"/>
                        <hr className="my-4" />

                        <a className="btn btn-primary btn-lg" href="#" role="button" >Calcular</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;