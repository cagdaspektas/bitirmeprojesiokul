import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import tfk from './img/tfk.jpeg';
import './css/How.css';
class How extends Component{



render(){

return(
<div className="How"><h1>Aslında çok basit!</h1>
<div><img src={tfk} className="howimg"/></div>
<p className="howp">Tek yaptığımız kerasla tensorflow birleşimi bir zekayı alıp gerekli işlemlere tabi tutarak makine öğrenmesi kullanmaktı.</p>


</div>



)

}




}
export default How;