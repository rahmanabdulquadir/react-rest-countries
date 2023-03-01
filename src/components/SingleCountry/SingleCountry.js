import React from 'react';
import "./SingleCountry.css"

const SingleCountry = (props) => {
  // console.log(props)
  const {area, region, population, name, flags} = props.country;
  // console.log(props.country)
  return (
    <div className='country'>
      <h1>Country Name: {name.common}</h1>
      <p>Population: {population}</p>
      <p><small>Region: {region}</small></p>
      <p><small>Area: {area}</small></p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default SingleCountry;