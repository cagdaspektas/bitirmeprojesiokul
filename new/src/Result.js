import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function Result() {
    const [normal, setNormal] = useState(0)

    useEffect(() => {
        fetch('/Result').then(res => res.json()).then(data => {
            setNormal(data.normal)
        })
    }, [])
    const [vrs, setVrs] = useState(0)

    useEffect(() => {
        fetch('/Result').then(res => res.json()).then(data => {
            setVrs(data.vrs)
        })
    }, [])
    const [bkt, setBkt] = useState(0)

    useEffect(() => {
        fetch('/Result').then(res => res.json()).then(data => {
            setBkt(data.bakteri)
        })
    }, [])

    return (
        <div>
            Flasktan gelen normal = {normal}
            Flasktan gelen virüs = {vrs}
            Flasktan gelen bakteri = {bkt}
        </div>
    );
}

export default Result;