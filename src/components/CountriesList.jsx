import React from 'react';
import { Link } from 'react-router-dom';

import './CountriesList.css';

const generateId = () => {
  return Math.random().toString();
};

export default function CountriesList(props) {
  return (
    <div className="col-5 countries-list">
      {props.countries && (
        <>
          <div className="list-group">
            {props.countries.map((country) => {
              return (
                <Link
                  className="list-group-item list-group-item-action text-left"
                  key={generateId()}
                  to={`/country/${country.cca3}`}
                >
                  <img
                    src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`}
                    alt=""
                    className="country-flag"
                  />
                  <span>{country.name.common}</span>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
