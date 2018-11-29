import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/home';

export default class App extends Component {
    render() {
        return (
          <Router>
              <Route path="/" component={Home} />
          </Router>
        );
    }
}
