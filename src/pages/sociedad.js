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

class SociedadHeader extends Component {
    render() {
        return (
            <header style={Background} className="text-center py-2 m-0">
                <img src={logo} className="img-fluid w-75"/>
            </header>
        )
    }
}

class SociedadTitle extends Component {
    render() {
        return (
            <p className="list-group-item-dark text-center text-white py-3 my-1">La AGN y la Sociedad</p>
        )
    }
}


export class SociedadBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoading: true,
          loading: true
        };      
    }
    
    componentDidMount = () => {
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
                                <li className="list-group-item border-0">
                                    <div className="wrapper">
                                        <div className="sociedad">
                                            <Link to={{pathname: `/participacion`}} className="App-link">
                                                <p className="text-center" style={TextColor}>Participación Ciudadana</p>
                                            </Link>
                                            <Link to={{pathname: `/aula`}} className="App-link">
                                                <p className="text-center" style={TextColor}>Aula AGN</p>
                                            </Link>
                                        </div>
                                    </div>
                                </li>                           
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


export class Sociedad extends Component {
    
    render() {
      return (
        <React.Fragment>
          <SociedadHeader />
          <SociedadTitle />
          <div className="App pb-5">
              <div className="pb-5">
                <SociedadBody /> 
              </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
    
}

export default Sociedad;
