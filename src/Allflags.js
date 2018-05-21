import React, {Component} from 'react';
import index from "./index.css"
//Calling db
import JSON from './db.json';
//Components:
import Header from './components/Header';
import Allcountries from './components/Allcountries';
import {Link} from 'react-router-dom';



class Allflags extends Component{

    state= {
      country:JSON,
      filtered:[],
    }

//creating a seach function
getKeyword = (event) =>{
  // let  keyword = event.target.value;
  let filtered = this.state.country.filter((item)=>{
     return item.name.indexOf(event) > -1
  });
  this.setState({
    filtered
  })
  //filter() is a built in function in ES6
  // console.log(filtered)
}

render(){
  //console.log(this.state.country)
    return (
      <div> 
      {/* //sending the function getKeyword to the Header component */}
         <Link className='btn btn-warning' to='/Home'>
                    Home
                    </Link>
         <Header getKeyword = {this.getKeyword}/>
         <Allcountries country={this.state.filtered.length === 0 ? this.state.country : this.state.filtered}></Allcountries>
         
      </div>
    )
  }
}



export default Allflags;