import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country.area);
    const{area, name, population, flags} = props.country
    return (
        <div className='country bg-info'>

            {/* <h4>Country Name:{props.name}</h4>
            <h5>Area: {props.country.area}</h5>
            <h5>Population: {props.country.population}</h5> */}
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Area:{area}</h4>
            <h4>Population: {population}</h4>
        </div>
    );
};

export default Country;