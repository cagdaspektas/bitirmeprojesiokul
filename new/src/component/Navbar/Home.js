import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import './Home.css'
import doc from '../../img/doc.jpg';




class Home extends Component{

render(){

    return(
        <div className="Home">
            <div><img className="home-img" src={doc}/></div>
            <div><h1 className="content-h">Pnömani teşhis yapay zekasına hoşgeldiniz! </h1>
            <p className="content-p">Bu zeka başka zeka.çok iyi Lorem ipsum dolor sit amet</p>
            <p className="content-p">Aklınızda sorular mı var buyrun!</p></div>
            <div><button>Zekamız nasıl çalışır?</button> <button>Pnömani Nedir</button><button>Beni de Teşhis edin</button></div>
        </div>
        
    )
}

}
export default Home;