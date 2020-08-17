import React from 'react';

import { Link } from 'react-router-dom';

const generateId = () => {
  return Math.random().toString();
};

class CountryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
    };
  }

  componentDidMount() {
    this.loadCountry();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.code !== this.props.match.params.code) {
      this.loadCountry();
    }
  }

  loadCountry() {
    const code = this.props.match.params.code;
    if (this.props.countries) {
      const country = this.props.countries.find(
        (country) => country.cca3 === code
      );
      this.setState({
        country,
      });
    }
  }

  render() {
    return (
      <div className="col-7">
        {this.state.country && (
          <>
            <h2 className="text-left">{this.state.country.name.common}</h2>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{this.state.country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {this.state.country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                {this.state.country.borders.length > 0 && (
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {this.state.country.borders.map((border) => {
                          return (
                            <li key={generateId()}>
                              <Link to={`/country/${border}`}>
                                {
                                  this.props.countries.find(
                                    (country) => country.cca3 === border
                                  ).name.common
                                }
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}
      </div>
    );
  }
}

export default CountryDetails;
