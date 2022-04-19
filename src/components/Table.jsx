import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { result } = useContext(StarWarsContext);
  const { handleChange, searchFilter } = useContext(StarWarsContext);

  return (
    <section>
      <input
        type="text"
        placeholder="Search"
        data-testid="name-filter"
        value={ searchFilter.input }
        onChange={ handleChange }
      />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {result
            ?.filter((planet) => planet.name.includes(searchFilter.input))
            .map((el, index) => (
              <tr key={ index }>
                <td>{el.name}</td>
                <td>{el.rotation_period}</td>
                <td>{el.orbital_period}</td>
                <td>{el.diameter}</td>
                <td>{el.climate}</td>
                <td>{el.gravity}</td>
                <td>{el.terrain}</td>
                <td>{el.surface_water}</td>
                <td>{el.population}</td>
                <td>{el.films}</td>
                <td>{el.creted}</td>
                <td>{el.edited}</td>
                <td>{el.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
