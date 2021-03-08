import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../App.css';
import { render } from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, IndexRoute, Redirect } from 'react-router';
import { HashRouter as Router, Switch, Link } from 'react-router-dom';
import { RotateSpinner } from "react-spinners-kit";

import splash from '../images/splash.png';

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            redirect: false
        };
    }
    
    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 3600)
    }

      componentWillUnmount() {
        clearTimeout(this.id)
      }

    
    renderSplash() {
        let splashStyle = {
            height: "100vh", 
            width: "100vw", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center"
        }
        
        let centerBottom = {
            position: "fixed",
            left: "50%",
            bottom: "80px",
            transform: "translate(-50%, -50%)",
            margin: "0 auto"
        }
        
        const { loading } = this.state;
        
        return(
            this.state.redirect ? <Redirect to="/main" /> :
            <div>
                <div style={splashStyle}>
                    <img src={splash}></img>
                </div>
                <div style={centerBottom}>
                    <RotateSpinner
                        size={30}
                        color="#064470"
                        loading={loading}
                    />
                </div>
            </div>
        )
    }

    render() {
        return this.renderSplash()
    }
}