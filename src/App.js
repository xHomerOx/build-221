import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import { render } from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, IndexRoute } from 'react-router';
import { HashRouter as Router, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';

import Splash from './pages/splash';

import Main from './pages/main';

import Informes from './pages/informes';
import Medios from './pages/medios';
import Auditorias from './pages/auditorias';
import Noticias from './pages/noticias';
import Autoridades from './pages/autoridades';
import Normas from './pages/normas';

import Informe from './pages/informe';
import Medio from './pages/medio';
import Auditoria from './pages/auditoria';
import Noticia from './pages/noticia';
import Autoridad from './pages/autoridad';
import Infografia from './pages/infografia';
import ParticipacionNode from './pages/participacion-node';
import AulaNode from './pages/aula-node';
import Olacefs from './pages/olacefs';

import Infografias from './pages/infografias';
import Sociedad from './pages/sociedad';
import Participacion from './pages/participacion';
import Aula from './pages/aula';
import Memoria from './pages/memoria';
import Internacional from './pages/internacional';

const Background = {
    background: '#004272'
};

class App extends Component {
    render(){
      return (
        <div className="App">       
            <Router>
                <Switch>
                    
                    <Route path='/' exact component={Splash} />
                    <Route path='/main' exact component={Main} />
                    <Route path="/informes" component={Informes}></Route>
                    <Route path="/medios" component={Medios}></Route>
                    <Route path="/auditorias" component={Auditorias}></Route>
                    <Route path="/noticias" component={Noticias}></Route>
                    <Route path="/autoridades" component={Autoridades}></Route>
                    <Route path="/normas" component={Normas}></Route>
          
                    <Route path="/informe/:nid" component={Informe}></Route>
                    <Route path="/medio/:nid" component={Medio}></Route>
                    <Route path="/auditoria/:nid" component={Auditoria}></Route>
                    <Route path="/noticia/:nid" component={Noticia}></Route>
                    <Route path="/autoridad/:nid" component={Autoridad}></Route>
                    <Route path="/infografia/:nid" component={Infografia}></Route>
                    <Route path="/participacion-node/:nid" component={ParticipacionNode}></Route>
                    <Route path="/aula-node/:nid" component={ParticipacionNode}></Route>
                    <Route path="/olacefs/:nid" component={Olacefs}></Route>          
          
                    <Route path="/infografias" component={Infografias}></Route>
                    <Route path="/sociedad" component={Sociedad}></Route>
                    <Route path="/participacion" component={Participacion}></Route>
                    <Route path="/aula" component={Aula}></Route>
                    <Route path="/memoria" component={Memoria}></Route>
                    <Route path="/internacional" component={Internacional}></Route>
          
                </Switch>
            </Router>
        </div>
      );
   }
}

export default App;