import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import {Provider} from "react-redux";
import generateStore from './redux/store';
//Para enrutamiento se instala aparte con mpm install react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

//Importar Componentes
import ComponenteDiego from './components/ComponenteDiego';
import CFooter from './components/CFooter';
import LoginComponent from './components/LoginComponent';
import Board from './components/Board';
import Square from './components/Square';
import Game from './components/Game';
import AoE from './components/AoE';
import AoEDetail from './components/AoEDetail';
import Pokemones from './components/Pokemones';
import GastosCRUD from './components/GastosCRUD';

function HolaMundo(nombre, años) {
  var presentacion = <div><h2>Hola, yo soy {nombre}</h2>
    <h3>Tengo {años} años.</h3>
  </div>
  return presentacion;
}

function App() {
  const store = generateStore();
  var nombre = "Diego Alberto Zárate Lara";

  return (
    <div className="App">
      
      <Router>
        <div className="btn-group">
          <Link className="btn btn-dark" to="/">
            Inicio
          </Link>
          <Link className="btn btn-dark" to="/formulario">
            Manipular Formularios
          </Link>
          <NavLink className="btn btn-dark" to="/customcomponent" activeClassName="active">
            Listas y componente P.
          </NavLink>
          <NavLink className="btn btn-dark" to="/aoe">AoE</NavLink>
          <NavLink className="btn btn-dark" to="/pokemones">
            Pokemones Redux
          </NavLink>
          <NavLink className="btn btn-primary" to="/gastos">
            Gastos CRUD
          </NavLink>
        </div>
        <Provider store={store}>
        <Switch>
          <Route path="/aoe/:id">
            <AoEDetail></AoEDetail>
          </Route>
          <Route path="/" exact>
            <p className="lead">Nota: Si se pone la ruta general primero se coloca exact para indicar que debe coincidir.</p>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>1.-Tutorial página React</p>
              <Game></Game>
            </header>
            <div className="jumbotron">
              <h1>2.-Como presentar datos desde una función</h1>
              <p className="lead">{HolaMundo(nombre, 24)}</p>
              <hr className="my-4"></hr>
              <p className="lead">Un ejemplo de como pintar mediante componente.</p>
            </div>
          </Route>
          <Route path="/contacto">Esta es la página de contacto</Route>
          <Route path="/formulario">
            <h3>3.-Como manejar formularios</h3>
            <LoginComponent />
          </Route>
          <Route path="/customcomponent">
            <h2>4.-Componente Personalizado</h2>
            <p>Mostrar listas en un componente</p>
            <ComponenteDiego></ComponenteDiego>
          </Route>
          <Route path="/aoe">
            <AoE></AoE>
          </Route>
          <Route path="/pokemones">
            <Pokemones/>
          </Route>
          <Route path="/gastos">
            <GastosCRUD/>
          </Route>
        </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
