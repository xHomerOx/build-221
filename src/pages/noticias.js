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

class NoticiasHeader extends Component {
    render() {
        return (
            <header style={Background} className="text-center py-2 m-0">
                <img src={logo} className="img-fluid w-75"/>
            </header>
        )
    }
}

class NoticiasTitle extends Component {
    render() {
        return (
            <p className="list-group-item-dark text-center text-white py-3 my-1">Noticias Institucionales</p>
        )
    }
}


export class NoticiasBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoading: true,
          items: [],
          updatedItems: [],
          filterReso: "",
          activePage: [],
          total_items: [],
          loading: true
        };      
        
        this.handlePageChange=this.handlePageChange.bind(this);
    }
    
    componentDidMount = () => {
     fetch("https://www.agn.gob.ar/reactjs/noticias")
        .then(response => response.json())
        .then(
        (result) => {
            this.setState({
            isLoading: false,
            items: result.rows,
            updatedItems: result.rows,
            total_items: result.pager.total_items,
            current_page: 1,
            itemsPerPage: 10
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

    handlePageChange = (pageNumber) => {
        const {current_page, itemsPerPage, updatedItems} = this.state;
        this.setState({current_page: pageNumber});
        
    }
    
    itemData = () => {
        return <Pagination activePage={this.state.current_page} itemsCountPerPage={this.state.itemsPerPage} pageRangeDisplayed={this.state.total_pages} totalItemsCount={this.state.total_items} pageRangeDisplayed={6} onChange={this.handlePageChange.bind(this)} innerClass={'pagination justify-content-center'} itemClass={'page-item'} linkClass={'page-link'} />
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
                 
                const indexOfLast = current_page * itemsPerPage;
                const indexOfFirst = indexOfLast - itemsPerPage;
                updatedItems = updatedItems.slice(indexOfFirst, indexOfLast);
            
                  return (
                        items = updatedItems.map(item=>{
                        return (
                                <li key={item.nid} className="list-group-item border-0">
                                    <div className="wrapper">
                                        <div className="noticias">
                                            <Link to={{pathname: `/noticia/${item.nid}`, state: { params: {id: `${item.id}`, nid: `${item.nid}`} }}} className="App-link">
                                                <p className="text-left" style={TextColor} id={item.id}>{item.titulo.replace(/&quot;/g, '"')}</p>
                                            </Link>
                                        </div>
                                    </div>
                                </li>                           
                        )
                    }   
                )
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
                    {this.itemData()}
                </ul>
            </Container>
        )
    } 


}


export class Noticias extends Component {
    
    render() {
      return (
        <React.Fragment>
          <NoticiasHeader />
          <NoticiasTitle />
          <div className="App pb-5">
              <div className="pb-5">
                <NoticiasBody /> 
              </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
    
}

export default Noticias;
