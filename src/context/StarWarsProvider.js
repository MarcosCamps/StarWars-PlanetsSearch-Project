import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [result, setResult] = useState();
  // const [allResults, setAllResults] = useState();
  const [searchFilter, setSearchFilter] = useState({
    input: '',
  });
  const [columnState, setColumnState] = useState('population');
  const [column, setColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  async function fetchPlanetList() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    setResult(data.results);
    // setAllResults(data.results);
  }

  const handleChange = ({ target }) => {
    setSearchFilter({
      input: target.value,
    });
  };

  const handleClickFilter = () => {
    switch (comparison) {
    case 'maior que':
      setResult(result.filter((el) => el[columnState] > +value));
      break;
    case 'menor que':
      setResult(result.filter((el) => el[columnState] < +value));
      break;
    case 'igual a':
      setResult(result.filter((el) => +el[columnState] === +value));
      break;
    default:
    }
    const removeOption = column.filter((remove) => remove !== columnState);
    setColumn(removeOption);
  };

  useEffect(() => {
    fetchPlanetList();
  }, []);

  const contextValue = {
    result,
    searchFilter,
    column,
    comparison,
    value,
    columnState,
    setColumn,
    setComparison,
    setColumnState,
    setValue,
    handleChange,
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
