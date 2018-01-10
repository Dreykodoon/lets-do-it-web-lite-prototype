import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Layout from './layout/layout';
import Camera from './camera/camera';
import Gallery from './gallery/gallery';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/camera' component={Camera}/>
            <Route exact path='/gallery' component={Gallery}/>
            <Redirect to='/camera'/>
          </Switch>
        </Layout>
      </Router>
      
    );
  }
}

export default App;
