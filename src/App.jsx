import React from "react";
import './App.css'

import {Footer, Blog, Possibility, WhatGPT3, Header, Features} from './container/index'
import { CTA, Brand, Navbar, Article} from './components/index'

function App() {
  return (
    <div className="App">

      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>

      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>

    </div>
  );
}

export default App;
