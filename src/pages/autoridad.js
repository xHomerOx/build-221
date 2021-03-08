import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, IndexRoute } from 'react-router';
import Moment from 'react-moment';
import ReactHtmlParser from 'react-html-parser';

import Autoridades from './autoridades';

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

class Autoridad extends Component {
    
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
    fetch(`https://www.agn.gob.ar/reactjs/block_content/basic/${id}`)
      .then(response => response.json())
      .then(
            (result) => {
            console.log(result);
            this.setState({
                isLoaded: true,
                item: result.data,
                image: result.included
            });
        }
      )
      
        
        
    }
    
    componentDidUpdate(prevProps, prevState) {
        var source = document.images[1].getAttribute("src");  
        document.images[1].setAttribute("src", "https://www.agn.gob.ar" + source);  
    }
    
    render(){
          const {error, item, image, isLoaded, keys } = this.state;  
        
           return (
            <div className="App pb-5">
              <header style={Background} className="text-center py-2 m-0">
                <img src={logo} className="img-fluid w-75"/>
              </header>
              <p className="list-group-item-dark text-center text-white py-3 my-1">Autoridad</p>
              <Container className="pb-5">
                <ul className="p-0">
                  <li className="list-group-item border-0">
                     {ReactHtmlParser(item.attributes.body.value)}
                  </li>
                </ul>
              </Container>
              <Footer />
            </div>
          );
     }
}

export default Autoridad;