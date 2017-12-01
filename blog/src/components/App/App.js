import React, {Component} from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom'

import Layout from '../../components/Layout/Layout';
import Main from '../../components/Main/Main';

import './app.css';

class App extends Component {
    render (){
        return (
            <Router>
                <Layout>
                    <Main />
                </Layout>
            </Router>
        )
    }
}

export default App;
