import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [result, setResult] = useState();
  const [searchFilter, setSearchFilter] = useState({
    input: '',
  });

  async function fetchPlanetList() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    setResult(data.results);
  }

  const handleChange = ({ target }) => {
    setSearchFilter({
      input: target.value,
    });
  };

  useEffect(() => {
    fetchPlanetList();
  }, []);

  const value = {
    result,
    handleChange,
    searchFilter,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
