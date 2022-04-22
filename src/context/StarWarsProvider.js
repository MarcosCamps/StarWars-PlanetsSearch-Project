import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [result, setResult] = useState();
  const [allResults, setAllResults] = useState();
  const [searchFilter, setSearchFilter] = useState({
    input: '',
  });
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  async function fetchPlanetList() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    setResult(data.results); setAllResults(data.results);
  }

  const handleChange = ({ target }) => {
    setSearchFilter({
      input: target.value,
    });
  };

  const handleClickFilter = () => {
    switch (comparison) {
    case 'maior que':
      return setResult(result.filter((el) => el[column] > +value));
    case 'menor que':
      return setResult(result.filter((el) => el[column] < +value));
    case 'igual a':
      return setResult(result.filter((el) => +el[column] === +value));
    default:
    }
  };

  useEffect(() => {
    fetchPlanetList();
  }, []);

  const contextValue = {
    result,
    handleChange,
    searchFilter,
    column,
    comparison,
    value,
    setColumn,
    setComparison,
    setValue,
    handleClickFilter,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
