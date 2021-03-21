import logo from './logo.svg';
import './App.css';
import React,{ Component, useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./component/Navbar/Navbar"
import {Switch, Route, Link, BrowserRouter, Redirect} from "react-router-dom";
import Result from './Result';
import './css/Upload.css';
import {BsCloudUpload} from 'react-icons/bs';
import Button from '@material-ui/core/Button';
import {GiMagnifyingGlass} from 'react-icons/gi'
import { Box } from '@material-ui/core';
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
     <h1>Burası çok kolay</h1>
     <p>Yapay zekanın sizi yorumlaması için tek yapmanız gereken xray görüntüsünü upload etmek</p>   
   <div>
      <label for="file-upload" className="upload">
        Resmi yükle<BsCloudUpload/>
      </label>
    <div><input type="file" id="file-upload" onChange={this.selectedFile}/>
    <Box mr={20} display="inline" ><Button onClick={this.dosyaUpload} variant="contained" color="primary">Yorumla <GiMagnifyingGlass/></Button></Box></div>
           
           
    </div>
    </div>
)
    }



}
export default Upload