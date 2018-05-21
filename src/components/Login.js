import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

axios.defaults.withCredentials = true;

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:{
                email:'',
                password:''
            },
            error: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(element){
        var formData = this.state.data;
        formData[element.target.name]=element.target.value;
        this.setState({
            data: formData
        })
    }

   
   handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:8000/api/login", this.state.data).then((res)=>{
        //  console.log(res);
         if (res.data.error) {
          return  this.setState({error:res.data.message})
         }
          return this.props.history.push("/Home");
        });
      }
   
    render() {
        return (
            <div className="login">
                <h3 className="form-group">Login</h3>
                <form onSubmit={this.handleSubmit}>  

                {this.state.error && <h3 className="text-danger">{this.state.error}</h3>}
                   
                    <div className="form-group">
                  
                        <input type="email" name="email" value={this.state.data.email} onChange={this.handleChange} className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <br />
                    <div className="form-group">
                   
                        <input type="password" name="password" value={this.state.data.password} onChange={this.handleChange} className="form-control" id="exampleInputPassword2" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <br />
                <br />

            </div>
        );
    }
}

export default withRouter(Login);