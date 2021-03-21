import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import './Home.css'
import doc from '../../img/doc.jpg';
import Button from '@material-ui/core/Button';
import { Route, Switch,Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { NavLink } from 'react-router-dom';



class Home extends Component{

render(){

    return(
        <div className="Home">
            <div><img className="home-img" src={doc}/></div>
            <div><h1 className="content-h">Pnömani teşhis yapay zekasına hoşgeldiniz! </h1>
            <p>Aklınızda sorular var mı var.</p>
            <p>Buyrun!</p>
    </div>
            <div><Box className="buttonc" mt={20} display="inline"><Button variant="contained" className="buttonc" href="/How">Zekamız nasıl çalışır?</Button></Box><Box mt={20} ml={5} mr={5} display="inline"><Button variant="contained" color="primary" className="buttonc">Pnömani Nedir</Button></Box>
            <Box mt={20} display="inline"> <Button variant="contained" color="secondary" href="/Upload" className="buttonc">Beni de teşhis edin</Button></Box></div>
        </div>
        
    )
}

}
export default Home;