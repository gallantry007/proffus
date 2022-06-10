// Latest Commit
import React, { Component } from 'react';
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import Footer from './components/Footer'
import FAQs from './components/FAQs'
import Category from './components/Category'
import MyCart from './components/MyCart'

import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Hero/>
      <Category/>
      <FAQs/>
      <MyCart/>
      <Login/>
    
      <Footer/>
      </>
    );
  }
}

export default App;