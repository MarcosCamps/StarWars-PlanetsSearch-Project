import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Column() {
  const {
    setComparison,
    setColumnState,
    setValue,
    column,
    columnState,
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
          value={ columnState }
          onChange={ (e) => setColumnState(e.target.value) }
        >
          {column.map((el, index) => (
            <option key={ index } value={ el }>{el}</option>
          ))}
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
