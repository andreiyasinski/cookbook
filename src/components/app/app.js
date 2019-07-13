import React from 'react';
import Layout from '../layout/layout';
import Profile from '../profile/profile';
import Add from '../add/add';
//import Recipes from '../recipes/recipes';
import {Route, Switch} from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Add} />
        </Switch>
      </Layout>
    )
  };
}