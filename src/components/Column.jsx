import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
// import StarWarsContext from '../context/StarWarsContext';

function Column() {
  const {
    setColumn,
    setComparison,
    setValue,
    column,
    comparison,
    value,
    handleClickFilter,
  } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="column">
        Coluna:
        <select
          data-testid="column-filter"
          name="column"
          id="column"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="operator">
        Operador:
        <select
          data-testid="comparison-filter"
          name="operator"
          id="operator"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilter }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Column;
