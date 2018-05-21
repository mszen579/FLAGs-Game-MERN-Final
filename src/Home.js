import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';


 ////////////////////////////////////////////////////
   //this const is to show the date in the home page
   const gettingCurrantDate = () =>{
    const date = new Date();
    return date.toDateString();
    }
    ///////////////////////////////////////////////////

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state={

            user:{},
            error:'Wrong Credentials'
        }
    //to get the user session
    axios.get('http://localhost:8000/api/currentuser')
            .then(function(result){
                console.log(result);
                this.setState({

                    user: result.data,
                    error: ''
                })
            }.bind(this))
            .catch(error => console.log(error))
    }

    handleLogout(){
        axios.get('http://localhost:8000/api/logout')
            .then( result =>{
                window.location.href = '/';
            })
            .catch( error => console.log(error))
    }




    render() {
        return (
            <div className="home">
           {this.state.user.name  && <h1 className="title-text">WELCOME "{this.state.user.name}" TO THE FLAG GAME</h1>}
            <h3 className="form-group">Today's date is: {gettingCurrantDate()}</h3>
            {!this.state.user.name  && <h1 className="title-text2">YOU SHOULD LOGIN FIRST TO PLAY</h1>}
            {!this.state.user.name  && <Link className="btn btn-primary" to="/">Back to Login and Registration Page</Link>}
            {this.state.user.name  &&  <button className='btn nav-link btn-warning' onClick={this.handleLogout}>Logout</button>}
            {this.state.user.name  && <h3>Go directly to the game!!!</h3>}
            {this.state.user.name  && <Link className="btn btn-primary" to="/Thegame">Go to FLAG game</Link>}
                <br />
                <hr />
                {this.state.user.name  &&  <h3>Or... Refresh your memory?</h3>}
                <br />
                {this.state.user.name  &&   <Link className="btn btn-primary" to="/allflags">See all countries</Link>}
            </div>
        )
    }
}
