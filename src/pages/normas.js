import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, IndexRoute } from 'react-router';
import Moment from 'react-moment';
import ReactHtmlParser from 'react-html-parser';

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

class Normas extends Component {
    
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
    const { nid } = this.props.match.params;
    fetch(`https://www.agn.gob.ar/reactjs/block_content/basic/faaae9be-7c3a-4220-97ad-3f4985c83334`)
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
    
  componentDidUpdate(){
    for (var i = 1; i <= 14 ; i++) {
     var href = document.links[i].getAttribute("href");  
     document.links[i].setAttribute("href", "https://www.agn.gob.ar" + href);    
    }
  }
    
    render(){
          const {error, item, image, isLoaded, keys } = this.state;  
          
           return (
            <div className="App pb-5">
              <header style={Background} className="text-center py-2 m-0">
                <img src={logo} className="img-fluid w-75"/>
              </header>
              <p className="list-group-item-dark text-center text-white py-3 my-1">Normas</p>
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

export default Normas;