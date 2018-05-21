import React from 'react';
import Singlecountry from './Singlecountry';


//functional component
const Allcountries = (props) => {

    const countries = props.country.map((country) => {
        return(
           <Singlecountry  country={country} />
        )
    });

    return(
        <div className="test">
        {countries}
        {/* "countries" is the function above */}
        </div>
    )
}

export default Allcountries;