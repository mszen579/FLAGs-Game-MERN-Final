import React, { Component } from 'react'
import Register from './Register';
import Login from './Login';

 ////////////////////////////////////////////////////
   //this const is to show the date in the home page
   const gettingCurrantDate = () =>{
    const date = new Date();
    return date.toDateString();
    }
///////////////////////////////////////////////////////////////

export default class Logreg extends Component {


    
    render() {
        return (
            <div>
            <h1 className="title-text">WELCOME TO THE FLAG GAME</h1>
            <h3 className="form-group">To play!!! please login with your account, or register below</h3>
            <hr />
            <h3 className="form-group">Today's date is: {gettingCurrantDate()}</h3>
            <hr />
                <Login />
                <hr />
                <Register />
            </div>
        )
    }
}
