import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
//components
import Thegmae from './Thegame';
import Allflags from './Allflags';
import Logreg from './components/Logreg';
import Home from './Home';
//css
import './index.css';


class App extends Component {

/////user session

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
////////////

  
  render() {
    return (
      <div >
          <Router>
                <Switch>
                    <Route exact path='/' component={Logreg} />
                    <Route  path='/Home' component={Home} />
                    <Route  path='/Thegame' component={Thegmae} />
                    <Route  path='/Allflags' component={Allflags} />
                    <Route render={function(){
                    return (
                    <p className="title-text">Error 400...Page Not Found!!!!
                    <br />
                    <Link className='btn nav-link btn-success' to='/'>
                    Back to Homepage
                    </Link>
                    </p>
                    )
                    }} />
                </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
