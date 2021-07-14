import React from 'react';
import Main from '../components/Main';
import Slider from '../components/Slider';
import Product from '../components/Products';
import Laptop from '../components/Popular_Laptop';
import Phone from '../components/Popular_phone';
import { Component } from 'react';
import Autho from '../components/Authorization/Authorization_Header'
import axios from 'axios';
import ScrolltoTop from '../components/ScrolltoTop/ScrolltoTop';
class Home_page extends Component {
    render(){
        return (
            <div>
            <Autho/>
            <Slider/>
            <Main/>
            <Product/>
            <Laptop/>
            <Phone/>
            <ScrolltoTop/>
            </div>
        );
    }
};

export default Home_page;