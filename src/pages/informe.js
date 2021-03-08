import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, IndexRoute } from 'react-router';
import Informes from './informes';

import Footer from '../pages/footer.js';

const Background = {
  background: '#004272'
}

const TextColor = {
    color: '#004272'
}

class Informe extends Component {
    
  constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          item: {
                  attributes: {
                      field_numero_de_actuacion: {},
                      field_periodo_auditado: {}              
                  },
                  relationships: {
                      field_tipo_de_auditoria: {
                          data: []
                      },
                      field_ficha: {
                          links: {
                              self: {}
                          }
                      }
                  }
           },
           file: []
        }
    }


  componentDidMount(){
    const { id } = this.props.location.state.params;
    const { nid } = this.props.match.params;
    if (!id) {
      return;
    }
    fetch(`https://www.agn.gob.ar/reactjs/node/informes/${id}?include=field_ficha,field_infografia,field_informe_en_video,field_informe_multimedia,field_informe,field_resolucion`)
      .then(response => response.json())
      .then(
            (result) => {
            this.setState({
            isLoaded: true,
            item: result.data,
            file: result.included
            });
        }
      )
    }

    render(){
          const {error, item, file, isLoaded, keys } = this.state;
          console.log(item);
          console.log(file);
          const controlAuditoria = item.relationships.field_tipo_de_auditoria.data;
          var itemData = controlAuditoria.map(function (itemAuditoria) {
                return itemAuditoria.id;
            });
          console.log(itemData);
          if (itemData == "6baf484c-8442-4407-8a3f-0976881b43d3"){
              itemData = "Informe Especial";
          } else if (itemData == "359f1f01-cdd5-4b18-b653-a837ca41ef54") {
              itemData = "Informe de Gestión";
          } else if (itemData == "b2e78331-3e40-4320-9c4d-a84375876118") {
              itemData = "Estados Contables";
          } else if (itemData == "e1f1f4d3-941b-455d-a8f0-9d59d35f0173") {
              itemData = "Estados Financieros";
          }
            
           var actuacion; 
           if (item.attributes.field_numero_de_actuacion == null) {
                actuacion = "";
           } else {
                actuacion = item.attributes.field_numero_de_actuacion.value;
           }
        
           var periodo;
           
           if (item.attributes.field_periodo_auditado == null) {
                periodo = "";
           } else {
                periodo = item.attributes.field_periodo_auditado.value + "-" + item.attributes.field_periodo_auditado.end_value;
           }
               
           return (
            <div className="App pb-5">
              <header style={Background} className="text-center py-2 m-0">
                <img src={logo} className="img-fluid w-75"/>
              </header>
              <p className="list-group-item-dark text-center text-white py-3 my-1">{item.attributes.title}</p>
              <Container className="pb-5">
                <ul className="p-0">
                  <li className="list-group-item border-0">
                        <strong>Número de Resolución:</strong>
                        <p style={TextColor}>{item.attributes.field_resoluci}</p>     
                    </li>
                    <li className="list-group-item border-0">
                        <strong>Año:</strong>
                        <p style={TextColor}>{item.attributes.field_ano}</p>     
                    </li>
                    <li className="list-group-item border-0">
                        <strong>Número de Actuación:</strong>
                        <p style={TextColor}>{actuacion}</p>     
                    </li>
                    <li className="list-group-item border-0">
                        <strong>Período auditado:</strong>
                        <p style={TextColor}>{periodo}</p>
                    </li>
                    <li className="list-group-item border-0">
                        <strong>Tipo de control:</strong>
                        <p style={TextColor}>{itemData}</p>
                    </li>
                    <li className="list-group-item border-0">
                        <strong>Archivos del Informe:</strong>
                        {file.map( file=> <a target="_blank" href={`https://www.agn.gob.ar${file.attributes.uri.url}`}><p style={TextColor}>Descarga</p></a>)}
                    </li>
                </ul>
              </Container>
              <Footer />
            </div>
          );
     }
}

export default Informe;