import logo from './logo.svg';
import './App.css';
import React,{ Component, useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./component/Navbar/Navbar"
import {Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Result from './Result';

class Upload extends Component{
    selectedFile = event=>{
        this.setState({
        selectedFile: event.target.files[0]
        })
        }
        
        dosyaUpload= () =>{
        const fd = new FormData();
        fd.append('image',this.state.selectedFile,this.state.selectedFile.name);
        axios.post("/upload",fd);
        
        }
        


render(){ return(

    
    <div className="Upload">
   
    <input type="file" onChange={this.selectedFile}/>
    <button onClick={this.dosyaUpload}>Upload</button>
           
           <Link to="/Result">Sonıc</Link>
         
    </div>
)
    }



}
export default Upload