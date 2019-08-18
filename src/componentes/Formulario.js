import React, { Component } from 'react';

class Formulario extends Component {

    ciudadRef = React.createRef();
    paisRef = React.createRef();    

    buscarClima = (e) => {
        e.preventDefault();

        const respuesta = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }
        this.props.datosConsulta(respuesta);
     //   console.log(respuesta)
     
    }
    render() {
        return (
            <div className='contenedor-form'>
                <div className='container'>
                    <div className='row'>
                        <form onSubmit={this.buscarClima}>
                            <div className='input-field col s12 m8 l4 offset-m2'>
                                <input id='ciudad' ref={this.ciudadRef} type='text' />
                                <label htmlFor='ciudad'>Ciudad</label>
                            </div>
                            <div className='input-field col s12 m8 l4 offset-m2'>
                                <select ref={this.paisRef}>
                                    <option value='' defaultValue>Elige un pais</option>
                                    <option value='SV' defaultValue>El Salvador</option>
                                    <option value='MX' defaultValue>Mexico</option>
                                    <option value='PE' defaultValue>Peru</option>
                                    <option value='RU' defaultValue>Rusia</option>
                                    <option value='AL' defaultValue>Alemania</option>

                                </select>
                                <label htmlFor='pais'>Pais</label>
                            </div>
                            <div className='input-field col s12 m8 l4 offset-m2 buscador'>
                                <input type='submit' className='waves-effect waves-light btn-large yellow accent-4' value='Buscar'></input>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Formulario;