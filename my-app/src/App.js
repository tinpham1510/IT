import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from "react";
import axios from 'axios'

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'; 
import SignUp_page from './SignUp_page/SignUp_page';
import Login_page from './Login_page/Login_page';
import Home_pageJS from './Home_pageJS/Home_page';
import Footer from './components/Footer';
import Orders from './components/Orders_page/Orders';
import Customer from './components/Customer_page/Customer';
import Element from './components/Element__page/Element'
import Product__page from './components/Product_page/Product_page';
import Dashboard_page from './components/Dashboard_page/Dashboard_page';
import Purchase from './components/Purchase__page/Purchase__page';
axios.defaults.withCredentials = true;
function App(props) {
    

    return ( 
        <Router>
      <div>
        
        <Switch>

          <Route key="homepage" exact path="/" component={Home_pageJS}/>
          <Route key="element" exact path="/Element_page/:id" component={Element}/>
          <Route key="orers" path="/Orders_page" render={()=>{
            return localStorage.getItem('access_token') ? <Orders/> : <Redirect to ="/Login_page"/>
          }} ></Route>
          <Route key="login" exact path="/Login_page" component={Login_page}/>
          <Route key="signup" exact path="/SignUp_page" component={SignUp_page}/>
          <Route key="customer" path="/Customer_page" render={()=>{
            return localStorage.getItem('access_token') ? <Customer/> : <Redirect to ="/Login_page"/>
          }}></Route>
          <Route key="product" path="/Product_page" component={Product__page}/>
          <Route key="dashboard" path="/Dashboard" component={Dashboard_page}/>
          <Route key="purchase" path="/Purchase__page" component={Purchase} ></Route>
          
        </Switch>
        <Footer></Footer>
      </div>
        </Router>
    );
}

export default App;