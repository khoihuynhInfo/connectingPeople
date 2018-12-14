import React, { Component, Fragment } from 'react';
import './styles/App.css';
import Footer from './components/Footer';
import routers from './routers';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            {this.showRouter()}   
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }

  showRouter = () => {
    return routers.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    })
  }


}

export default App;


