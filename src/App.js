
import './App.css';
import React from 'react';
import Main from "./layouts/main/main";
import Header from "./Components/header/header";
import Nav from "./Components/nav/nav";
import Footer from "./Components/footer/footer";
const App = () => {

  return (
    <div>
        <Nav />
        <Header />
        <Main />
        <Footer/>
    </div>
  );
}

export default App;
