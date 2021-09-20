
import './App.css';
import React from 'react';
import Main from "./layouts/main/main";
import Header from "./Components/header/header";
import Nav from "./Components/nav/nav";
import Footer from "./Components/footer/footer";
import './_global.scss'

const App = () => {

  return (
    <div className="container">
        <Nav />
        <Header />
        <Main />
        <Footer/>
    </div>
  );
}

export default App;
