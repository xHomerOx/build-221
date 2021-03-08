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

class InformesHeader extends Component {
    render() {
        return (
            <header style={Background} className="text-center py-2 m-0">
                <img src={logo} className="img-fluid w-75"/>
            </header>
        )
    }
}

class InformesTitle extends Component {
    render() {
        return (
            <p className="list-group-item-dark text-center text-white py-3 my-1">Listado de Informes</p>
        )
    }
}

export class InformesBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoading: true,
          items: [],
          updatedItems: [],
          filterTitle: "",
          filterYear: "",
          filterReso: "",
          activePage: [],
          total_items: [],
          loading: true
        };      
        
        this.handlePageChange=this.handlePageChange.bind(this);
    }
    
    componentDidMount = () => {
     fetch("https://www.agn.gob.ar/reactjs/informes")
        .then(response => response.json())
        .then(
        (result) => {
            this.setState({
            isLoading: false,
            items: result.rows,
            updatedItems: result.rows,
            filterTitle: "",
            filterYear: "",
            filterReso: "",
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
      return new Promise((resolve) => setTimeout(() => resolve(), 7200));
    }

    handlePageChange = (pageNumber) => {
        const {current_page, itemsPerPage, updatedItems} = this.state;
        //console.log(current_page);
        this.setState({current_page: pageNumber});
        
    }
    
    handleSearchFilter = (event, name) => {
          const inputValue = event.target.value;
          this.setState({ [name]: inputValue }, () => {
              this.filterList();
          });
          console.log(name, inputValue);
    };

    handleSearchKeyPress = (event) => {
            const regex = /^[0-9\b]+$/;
            var fieldState = event.target.name;
            console.log(fieldState);
            
            const regex2 = /^[A-Za-z0-9\s]+$/
            
            if (fieldState == "filterYear" || fieldState == "filterReso") {
               if (!regex.test(event.key) || !event.keyCode === 8 || !event.keyCode === 46){
                  event.preventDefault();
               }
            } else if (fieldState == "filterTitle") {
                if (!regex2.test(event.key) || !event.keyCode === 8 || !event.keyCode === 46){
                  event.preventDefault();
               }
            }
    }

    searchFilter = () => {
        return <React.Fragment>
                    <form className="form-inline m-3">
                           <div className="col-sm p-0 float-left w-50">
                                <label className="col-form-label lead form-group" style={TextColor}>Título: </label>
                           </div>
                           <div className="col-sm p-0 float-left w-50">
                                <input name="filterTitle" className="form-control" type="text" value={this.filterTitle} onChange={(e) => this.handleSearchFilter(e, "filterTitle")} onKeyPress={(e) => this.handleSearchKeyPress(e)} />
                           </div>
                        </form>
                        <form className="form-inline m-3">
                           <div className="col-sm p-0 float-left w-50">
                                <label className="col-form-label lead form-group" style={TextColor}>Año: </label>
                           </div>
                           <div className="col-sm p-0 float-left w-50">
                                <input name="filterYear" className="form-control" type="text" value={this.filterYear}  onChange={(e) => this.handleSearchFilter(e, "filterYear")} onKeyPress={(e) => this.handleSearchKeyPress(e)} />
                           </div>
                        </form>
                        <form className="form-inline m-3">
                           <div className="col-sm p-0 float-left w-50">
                                <label className="col-form-label lead form-group" style={TextColor}>Nro de Resolución: </label>
                           </div>
                           <div className="col-sm p-0 float-left w-50">
                                <input name="filterReso" className="form-control" type="text" value={this.filterReso}  onChange={(e) => this.handleSearchFilter(e, "filterReso")} onKeyPress={(e) => this.handleSearchKeyPress(e)} />
                           </div>
                    </form>
                </React.Fragment>                      
    }
    
    filterList = () => {
        const itemsUpdate = this.state.items.filter(item => {
            var filterTitle = item.titulo.toLowerCase().indexOf(this.state.filterTitle.toLowerCase()) !== -1; 
            var filterYear = item.ano.toLowerCase().indexOf(this.state.filterYear.toLowerCase()) !== -1;
            var filterReso = item.reso.toLowerCase().indexOf(this.state.filterReso.toLowerCase()) !== -1;
            
            return filterTitle && filterYear && filterReso;
        })
        
        this.setState({ updatedItems: itemsUpdate }, () => {
            console.log(this.state.updatedItems);
        });
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
                 
                
                //console.log(this.state.items);
                //console.log(itemsPerPage);
                const indexOfLast = current_page * itemsPerPage;
                const indexOfFirst = indexOfLast - itemsPerPage;
                updatedItems = updatedItems.slice(indexOfFirst, indexOfLast);
                //console.log(updatedItems);
            
              return (
                    items = updatedItems.map(item=>{
                    return (
                            <li key={item.nid} className="list-group-item border-0">
                                <div className="wrapper">
                                    <div className="informes">
                                        <Link to={{pathname: `/informe/${item.nid}`, state: { params: {id: `${item.id}`, nid: `${item.nid}`} }}} className="App-link">
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
                    {this.searchFilter()}
                    {this.itemList()}
                    {this.itemData()}
                </ul>
            </Container>
        )
    } 


}

export class Informes extends Component {
    
    render() {
      return (
        <React.Fragment>
          <InformesHeader />
          <InformesTitle />
          <div className="App pb-5">
              <div className="pb-5">
                <InformesBody /> 
              </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
    
}

export default Informes;