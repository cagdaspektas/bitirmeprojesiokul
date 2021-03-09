import logo from './logo.svg';
import './App.css';
import React,{ Component, useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./component/Navbar/Navbar"
import {Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Result from './Result';
import Upload from './Upload';
import Home from './component/Navbar/Home';


class App extends Component{




render(){ return(

<div className="App"><Navbar/>
<div className="Content">
      
       <Switch>
       <Route exact path="/"><Home/></Route>
       <Route path="/Upload"><Upload/></Route>
       <Route path="/Result"><Result/></Route>
       <Route path="/Home"><Home/></Route>

       </Switch>
       
</div>
</div>)



}

}
export default App;
