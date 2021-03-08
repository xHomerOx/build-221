import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, IndexRoute, withRouter } from 'react-router';
import { HashRouter as Router, Switch, Link } from 'react-router-dom';

import BackButton from '../images/back.png';
import HomeButton from '../images/home.png';

import FacebookIcon from '../images/fb_icon.png';
import TwitterIcon from '../images/tw_icon.png';
import YouTubeIcon from '../images/yt_icon.png';
import InstagramIcon from '../images/ig_icon.png';

const Background = {
  background: '#004272'
}

const BackgroundLight = {
    background: 'rgba(0, 0, 0, 0.73)'
}

class Footer extends Component {
    
    constructor(props) {
      super(props);
      this.goBack = this.goBack.bind(this); 
      this.goHome = this.goHome.bind(this); 
      //console.log(this.props);
    }

    goBack(){
       console.log(this.props);
       window.history.go(-2);
    }
    
    goHome(){
       console.log(this.props);
       this.props.history.push('/main');       
    }
    
    render() {     
        return (
            
        <div className="fixed-bottom">
           <ul className="nav nav-justified" style={BackgroundLight}>
              <li className="nav-item">
              </li>
              <li className="nav-item">
                 <a target="_blank" href="https://www.facebook.com/AuditoriaAGN/" className="nav-link text-white mb-0"><img src={FacebookIcon} /></a>
              </li>
              <li className="nav-item">
                 <a target="_blank" href="https://www.twitter.com/auditoriaagn" className="nav-link text-white mb-0"><img src={TwitterIcon} /></a>
              </li>
              <li className="nav-item">
                 <a target="_blank" href="https://www.youtube.com/user/AGNauditoria" className="nav-link text-white mb-0"><img src={YouTubeIcon} /></a>
              </li>
              <li className="nav-item">
                 <a target="_blank" href="https://www.instagram.com/auditoria_agn/" className="nav-link text-white mb-0"><img src={InstagramIcon} /></a>
              </li>
              <li className="nav-item">
              </li>
           </ul>
           <ul className="nav nav-justified" style={Background}>
              <li className="nav-item">
                 <a className="nav-link text-white mb-0" href="#" onClick={this.goBack}><img src={BackButton} className="img-responsive w-30 d-inline" /></a>
              </li>
              <li className="nav-item">
                 <a className="nav-link text-white mb-0" href="#" onClick={this.goHome}><img src={HomeButton} className="img-responsive w-30 d-inline" /></a>
              </li>
           </ul>
        </div>

        )
    }   
}

export default withRouter(Footer);