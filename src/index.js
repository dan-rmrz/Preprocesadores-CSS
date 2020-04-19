import React from 'react';
import ReactDOM from 'react-dom';
// import Articulo from './components/less/Articulo'; // Archivo del modulo de less
// import Perfil from './components/sass/Perfil'; // Archivo del modulo de sass
import ResultadosBusqueda from './components/stylus/ResultadosBusqueda';

const container = document.getElementById('app');

// ReactDOM.render(<Articulo />, container);
// ReactDOM.render(<Perfil />, container);
ReactDOM.render(<ResultadosBusqueda />, container);