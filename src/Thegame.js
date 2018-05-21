import React, { Component } from 'react'
import CountryGame from './CountryGame';
import axios from 'axios';

export default class Thegame extends Component {

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

    render() {
        return (
            <div className="flag-app">
            <h1 className="title-text">WELCOME: {this.state.user.name}</h1>
            <h3 className="title-text2">NOTE...You lose if you reach 5 incorrect answers...</h3>
                    <a className='btn btn-success' href='/Home'>
                    Home
                    </a>
                <CountryGame />
            </div>
        )
    }
}
