import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import CreateLink from './CreateLink.js';
import LinkList from './LinkList.js';
import Login from  './Login.js';

class App extends Component {
	render() {
	  return (
	    <div className='center w85'>
	      <Header />
	      <div className='ph3 pv1 background-gray'>
	        <Switch>
	          <Route exact path='/' component={LinkList}/>
            <Route exact path='/login' component={Login}/>
	          <Route exact path='/create' component={CreateLink}/>
	        </Switch>
	      </div>
	    </div>
	  )
	}
}

export default App;
