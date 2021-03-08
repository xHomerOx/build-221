import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, IndexRoute } from 'react-router';
import { HashRouter as Router, Switch, Link } from 'react-router-dom';

import './css/simple-sidebar.css';

import InformesLogo from '../images/informes.png';
import MediosLogo from '../images/medios.png';
import AuditoriasLogo from '../images/auditorias.png';
import NoticiasLogo from '../images/noticias.png';
import AutoridadesLogo from '../images/autoridades.png';
import NormasLogo from '../images/normas.png';

import Footer from '../pages/footer.js';

const Background = {
    background: '#004272'
}

const BackgroundLight = {
    background: 'rgba(0, 0, 0, 0.73)'
}

const PaddingNone = {
    padding: 0
}

const ButtonStyle = {
    background: 'unset',
    border: 'unset',
    textDecoration: 'none', 
    boxShadow: 'none'
}

const fixedWH = {
    width: '2em', 
    height: '2em'
}

class Main extends Component {
    
    constructor() {
        super()
        this.state = {
          active: false
        }
        this.toggleSidebar= this.toggleSidebar.bind(this);
    }
    
    toggleSidebar(){
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }
    
    render(){
      return (
        <div className="App pb-5">
            <div className="main pb-5">
              <header style={Background} className="text-center py-2 m-0">
                <img src={logo} className="img-fluid w-75" alt="logo" />
              </header>
                
                <nav className="navbar navbar-dark" style={Object.assign({},BackgroundLight, PaddingNone)}>
                    <button href="#menu-toggle" className="btn btn-secondary" id="menu-toggle" className="navbar-toggler" type="button" style={ButtonStyle} onClick={this.toggleSidebar}>
                        <span className="navbar-toggler-icon" style={fixedWH}></span>
                    </button>
                </nav>
                
                <div id="wrapper" className={this.state.active ? 'toggled': null} >
			        <div id="sidebar-wrapper" style={Object.assign({},BackgroundLight, PaddingNone)}>
			            <ul className="sidebar-nav text-left">
			                <li>
			                    <Link to="/infografias">- Infografías de informes</Link>
			                </li>
			                <li>
			                    <Link to="/sociedad">- AGN y Sociedad</Link>
			                </li>
			                <li>
			                    <a href="https://www.youtube.com/playlist?list=PLglbS7bQkfTAcOaAxV22nCxMUQRCaDWDS" target="_blank">- Colegio de Auditores</a>
			                </li>
			                <li>
			                    <Link to="/memoria">- Memoria</Link>
			                </li>
			                <li>
			                    <Link to="/internacional">- Participación Internacional</Link>
			                </li>
			            </ul>
			        </div>
			    </div>
                
                <Container className="container-fluid" align="center">
                  <Row className="align-items w-100">
                    <Col className="w-50">
                        <Link to="/informes" className="App-link">
                            <img src={InformesLogo} className="informes img-responsive w-75" />
                            <small className="d-block">INFORMES</small>
                        </Link>
                    </Col>
                    <Col className="w-50">
                        <Link to="/medios" className="App-link">
                            <img src={MediosLogo} className="medios img-responsive w-75" />
                            <small className="d-block">MEDIOS AGN</small>
                        </Link>
                    </Col>
                  </Row>
                  <Row className="align-items w-100">
                    <Col className="w-50">
                        <Link to="/auditorias" className="App-link">
                            <img src={AuditoriasLogo} className="auditorias img-responsive w-75" />
                            <small className="d-block">AUDITORÍAS EN VIDEO</small>
                        </Link>
                      </Col>   
                    <Col className="w-50">
                        <Link to="/noticias" className="App-link">
                            <img src={NoticiasLogo} className="noticias img-responsive w-75" />
                            <small className="d-block">NOTICIAS</small>
                        </Link>
                    </Col>
                  </Row>
                  <Row className="align-items w-100">
                    <Col className="w-50">
                        <Link to="/autoridades" className="App-link">
                            <img src={AutoridadesLogo} className="autoridades img-responsive w-75" />
                            <small className="d-block">AUTORIDADES</small>
                        </Link>
                    </Col>
                    <Col className="w-50">
                        <Link to="/normas" className="App-link">
                            <img src={NormasLogo} className="normas img-responsive w-75" />
                            <small className="d-block">NORMAS DE CONTROL</small>
                        </Link>
                    </Col>
                  </Row>
                </Container>
            </div>   
              <Footer />
          </div>           
      )
   }
}

export default Main;
