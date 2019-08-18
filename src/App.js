import React, { Component } from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';

class App extends Component {

  state = {
    error: '',
    consulta: false
  }

    componentDidUpdate(){
      this.consultaApi();
    }
  componentDidMount(){
    this.setState({
      error: false
    })
  }

  consultaApi = () => {
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) return null;
    
    const appId = 'fd24a70945ff5287c17a6736ac5d1d77';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
    console.log(url);

  }

  datosConsulta = respuesta => {
    if(respuesta.ciudad === '' || respuesta.pais === ''){
      this.setState({
        error: true
      })
    } else {
      this.setState({
        consulta: respuesta
      })
      }
    }


  render() {
    const error = this.state.error;
    let resultado;
    if(error) {
      resultado = <Error mensaje='Ambos campos son obligatorios' />
    } else {

    }
    return (
      <div className='App'>
        <Header titulo='Clima React'/>
        <Formulario datosConsulta = {this.datosConsulta}/>
      {resultado}
      </div>
    );
  }
}

export default App;
