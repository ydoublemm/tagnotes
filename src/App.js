import React, { Component } from 'react';


import Responsive from 'react-responsive';


import { Layout,Card ,Button ,} from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './assests/css/header.css'

import ContentGrid from './components/common/ContentGrid'

import HeaderGrid from './components/common/HeaderGrid'

import Login from  './components/common/NormalLoginForm'

import MainContent from './components/common/MainContent'



const { Header, Content, Footer } = Layout;



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }






  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/mainContent" component={MainContent} />
            </div>
        </Router>
    );
  }
}

export default App;
