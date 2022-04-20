import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Column from './Column';

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
      <Column />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface_water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
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
