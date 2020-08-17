import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: null,
    };
  }

  componentDidMount() {
    this.loadCountries();
  }

  loadCountries() {
    const url = 'https://countries.tech-savvy.tech/countries';
    axios.get(url).then((result) => {
      result.data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
      this.setState({
        countries: result.data,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
            <Switch>
              <Route
                path="/country/:code"
                render={(props) => (
                  <CountryDetails countries={this.state.countries} {...props} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
