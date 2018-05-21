import React, { Component } from 'react'


const Singlecountry =(props)=>{
//    console.log(props)
    return(
        <div className="container">
            <h4 className="title-text">{props.country.name}</h4>  
            <img src={props.country.flag} />
            <div>Capital: {props.country.capital}</div> 
            <div>Region: {props.country.region}</div>
            <div>Population: {props.country.population}</div>
            <div>Timezones: {props.country.timezones}</div>
            <div>NativeName: {props.country.nativeName}</div>
            <div>CallingCodes: {props.country.callingCodes}</div>
            <div>Latitud and longtiud: {props.country.latlng}</div>
            <hr />
         </div>
    )
}
export default Singlecountry;


