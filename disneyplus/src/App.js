import React from 'react';
import './App.css';
import Header from '/home/mouthy/node-js-projects/disney-plus/disneyplus/src/components/Header.js'
import Home from '/home/mouthy/node-js-projects/disney-plus/disneyplus/src/components/Home.js'
import Detail from '/home/mouthy/node-js-projects/disney-plus/disneyplus/src/components/Detail.js'
import Login from '/home/mouthy/node-js-projects/disney-plus/disneyplus/src/components/Login.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </Router>

    </div>
     
  )
}

export default App
