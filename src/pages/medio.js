import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, IndexRoute } from 'react-router';
import Moment from 'react-moment';
import ReactHtmlParser from 'react-html-parser';

import Medios from './medios';

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

class Medio extends Component {
    
  constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          item: {
              attributes: {
                  body: {
                      
                  }
              }
          },
          image: []
        }
    }


  componentDidMount(){
    const { id } = this.props.location.state.params;
    const { nid } = this.props.match.params;
    if (!id) {
      return;
    }
    fetch(`https://www.agn.gob.ar/reactjs/node/la_agn_en_los_medios/${id}?include=field_imagen`)
      .then(response => response.json())
      .then(
            (result) => {
            this.setState({
                isLoaded: true,
                item: result.data,
                image: result.included
            });
        }
      )
    }

    render(){
          const {error, item, image, isLoaded, keys } = this.state;  
          
           return (
            <div className="App pb-5">
              <header style={Background} className="text-center py-2 m-0">
                <img src={logo} className="img-fluid w-75"/>
              </header>
              <p className="list-group-item-dark text-center text-white py-3 my-1">{item.attributes.title}</p>
              <Container className="pb-5">
                <ul className="p-0">
                  <li className="list-group-item border-0">
                      {image.map( image=> <img target="_blank" src={`https://www.agn.gob.ar${image.attributes.uri.url}`} style={fullWidth}></img>)}
                  </li>
                  <li className="list-group-item border-0">
                      <p style={TextColor}><Moment format="DD-MM-YYYY">{item.attributes.field_fecha_nodo}</Moment></p>     
                  </li>
                  <li className="list-group-item border-0">
                      <p style={TextColor}>{ReactHtmlParser(item.attributes.body.value)}</p>     
                  </li>
                  
                </ul>
              </Container>
              <Footer />
            </div>
          );
     }
}

export default Medio;