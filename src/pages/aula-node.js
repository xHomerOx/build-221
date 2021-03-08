import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, IndexRoute } from 'react-router';
import Moment from 'react-moment';
import ReactHtmlParser from 'react-html-parser';

import Aula from './aula';

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

const marginTop = {
    margin: '20px 0'
}

class AulaNode extends Component {
    
  constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          item: {
              attributes: {
                  body: {
                      
                  },
                  field_video: {
                      
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
    fetch(`https://www.agn.gob.ar/reactjs/node/aula_agn/${id}?include=field_imagen`)
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
          console.log(item);
            
           var cuerpo;
           
           if (item.attributes.body == null) {
                cuerpo = "";
           } else {
                cuerpo = item.attributes.body.value;
           }
        
           var video;
           
           if (item.attributes.field_video == null){
               video = "";
               videoEmbed = "";
               var iframe = document.querySelector('.iframeDiv');
               iframe.style.display = 'none';
           }else{
               video = item.attributes.field_video;
               
               var videoEmbed = video.toString().replace("watch?v=", "embed/");
               videoEmbed = videoEmbed.split("&");
               console.log(videoEmbed);
           }
            
           var imagen;
           
           if (image) {
            imagen = <li className="list-group-item border-0">
                {image.map( image=> <img target="_blank" src={`https://www.agn.gob.ar${image.attributes.uri.url}`} style={Object.assign({}, fullWidth, marginTop)}></img>)}
             </li>
           } else {
             imagen = "";
           }
        
           return (
            <div className="App pb-5">
              <header style={Background} className="text-center py-2 m-0">
                <img src={logo} className="img-fluid w-75"/>
              </header>
              <p className="list-group-item-dark text-center text-white py-3 my-1">{item.attributes.title}</p>
              <Container className="pb-5">
                <ul className="p-0">
                  {imagen}
                  <li className="list-group-item border-0">
                      <div className="iframeDiv"><a target="_blank" href={videoEmbed[0]}>Link a YouTube</a></div>       
                  </li>
                  <li className="list-group-item border-0">
                      <p style={TextColor}><Moment format="DD-MM-YYYY">{item.attributes.field_fecha_nodo}</Moment></p>     
                  </li>
                  <li className="list-group-item border-0">
                      <p style={TextColor}>{ReactHtmlParser(cuerpo)}</p>     
                  </li>
                  
                </ul>
              </Container>
              <Footer />
            </div>
          );
     }
}

export default AulaNode;