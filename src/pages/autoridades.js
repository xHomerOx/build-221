import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, IndexRoute } from 'react-router';
import { HashRouter as Router, Switch, Link } from 'react-router-dom';
import Pagination from "react-js-pagination";

import Footer from '../pages/footer.js';

const Background = {
    background: '#004272'
}

const TextColor = {
    color: '#004272'
}

const fullWidth = {
    width: '100%'
}

class AutoridadesHeader extends Component {
    render() {
        return (
            <header style={Background} className="text-center py-2 m-0">
                <img src={logo} className="img-fluid w-75"/>
            </header>
        )
    }
}

class AutoridadesTitle extends Component {
    render() {
        return (
            <p className="list-group-item-dark text-center text-white py-3 my-1">Autoridades</p>
        )
    }
}

export class AutoridadesBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoading: true,
          items: [],
          updatedItems: [],
          total_items: [],
          loading: true
        };      
    }
    
    componentDidMount = () => {
     fetch("https://www.agn.gob.ar/reactjs/autoridades")
        .then(response => response.json())
        .then(
        (result) => {
            console.log(result);
            this.setState({
            isLoading: false,
            items: result.rows,
            updatedItems: result.rows,
            total_items: result.pager.total_items,
            });
        },
        (error) => {
            this.setState({
            isLoaded: false,
            error
            });
        }
      )
      this.loadScreen().then(() => this.setState({ loading: false }));
    }
    
    loadScreen = () => {
      return new Promise((resolve) => setTimeout(() => resolve(), 3600));
    }
    
    itemLoad = () => {
        return (
               <div className="mx-5"> 
                  <div className="progress align-items-center d-flex">
                        <div className="progress-bar progress-bar-striped progress-bar-animated m-auto" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="80" style={fullWidth}>Por favor espere</div>
                   </div>
               </div>
        )

    }
    
    itemList = () => {
              const { error, isLoaded, keys, current_page, per_page, itemsPerPage } = this.state;
              var { items, filterList, updatedItems } = this.state;
        
              return (
                  <div>
                      
                      <strong>CONSTITUCIÓN NACIONAL ARGENTINA<br /><br />

                <p className="text-left">Artículo 85.- (...) El presidente del organismo será designado a propuesta del partido político de oposición con mayor número de legisladores en el Congreso.

                Tendrá a su cargo el control de legalidad, gestión y auditoría de toda la actividad de la administración pública centralizada y descentralizada, cualquiera fuera su modalidad de organización, y las demás funciones que la ley le otorgue.

                    Intervendrá necesariamente en el trámite de aprobación o rechazo de las cuentas de percepción e inversión de los fondos públicos.:</p></strong>
                      
                      <li key={updatedItems[0].nid} className="list-group-item border-0">
                         <div className="wrapper">
                            <div className="autoridades">
                               <Link to={{pathname: `/autoridad/${updatedItems[0].nid}`, state: { params: {id: `${updatedItems[0].id}`, nid: `${updatedItems[0].nid}`} }}} className="App-link">
                                    <p className="text-left" style={TextColor} id={updatedItems[0].id}>{updatedItems[0].nombre}</p>
                               </Link>
                            </div>
                        </div>
                     </li> 

                      <strong>Designados a propuesta de la Cámara de Senadores:</strong>

                      <li key={updatedItems[1].nid} className="list-group-item border-0">
                         <div className="wrapper">
                            <div className="autoridades">
                               <Link to={{pathname: `/autoridad/${updatedItems[1].nid}`, state: { params: {id: `${updatedItems[1].id}`, nid: `${updatedItems[1].nid}`} }}} className="App-link">
                                   <p className="text-left" style={TextColor} id={updatedItems[1].id}>{updatedItems[1].nombre}</p>
                               </Link>
                            </div>
                        </div>
                     </li>
                      
                      <li key={updatedItems[2].nid} className="list-group-item border-0">
                         <div className="wrapper">
                            <div className="autoridades">
                               <Link to={{pathname: `/autoridad/${updatedItems[2].nid}`, state: { params: {id: `${updatedItems[2].id}`, nid: `${updatedItems[2].nid}`} }}} className="App-link">
                                   <p className="text-left" style={TextColor} id={updatedItems[2].id}>{updatedItems[2].nombre}</p>
                               </Link>
                            </div>
                        </div>
                     </li>
                      
                      <li key={updatedItems[3].nid} className="list-group-item border-0">
                         <div className="wrapper">
                            <div className="autoridades">
                               <Link to={{pathname: `/autoridad/${updatedItems[3].nid}`, state: { params: {id: `${updatedItems[3].id}`, nid: `${updatedItems[3].nid}`} }}} className="App-link">
                                   <p className="text-left" style={TextColor} id={updatedItems[3].id}>{updatedItems[3].nombre}</p>
                               </Link>
                            </div>
                        </div>
                     </li>
                      
                      <strong>Designados a propuesta de la Cámara de Diputados:</strong>

                      <li key={updatedItems[4].nid} className="list-group-item border-0">
                         <div className="wrapper">
                            <div className="autoridades">
                               <Link to={{pathname: `/autoridad/${updatedItems[4].nid}`, state: { params: {id: `${updatedItems[4].id}`, nid: `${updatedItems[4].nid}`} }}} className="App-link">
                                   <p className="text-left" style={TextColor} id={updatedItems[4].id}>{updatedItems[4].nombre}</p>
                               </Link>
                            </div>
                        </div>
                     </li>
                      
                      <li key={updatedItems[5].nid} className="list-group-item border-0">
                         <div className="wrapper">
                            <div className="autoridades">
                               <Link to={{pathname: `/autoridad/${updatedItems[5].nid}`, state: { params: {id: `${updatedItems[5].id}`, nid: `${updatedItems[5].nid}`} }}} className="App-link">
                                   <p className="text-left" style={TextColor} id={updatedItems[5].id}>{updatedItems[5].nombre}</p>
                               </Link>
                            </div>
                        </div>
                     </li>
                      
                      <li key={updatedItems[6].nid} className="list-group-item border-0">
                         <div className="wrapper">
                            <div className="autoridades">
                               <Link to={{pathname: `/autoridad/${updatedItems[6].nid}`, state: { params: {id: `${updatedItems[6].id}`, nid: `${updatedItems[6].nid}`} }}} className="App-link">
                                   <p className="text-left" style={TextColor} id={updatedItems[6].id}>{updatedItems[6].nombre}</p>
                               </Link>
                            </div>
                        </div>
                     </li>
                      
                </div>
              )          
    }        
            
    
   
    
    
    render(){
        const { loading } = this.state;
        
        if(loading) {
            return (
               <div className="mx-5"> 
                 <div className="progress align-items-center d-flex">
                    <div className="progress-bar progress-bar-striped progress-bar-animated m-auto" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="80" style={fullWidth}>Por favor espere</div>
                 </div>
               </div>            
            )
        }
        
        return(
            <Container>
                <ul className="p-0">
                    {this.itemList()}
                </ul>
            </Container>
        )
    } 


}


export class Autoridades extends Component {
    
    render() {
      return (
        <React.Fragment>
          <AutoridadesHeader />
          <AutoridadesTitle />
          <div className="App pb-5">
              <div className="pb-5">
                <AutoridadesBody /> 
              </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
    
}

export default Autoridades;