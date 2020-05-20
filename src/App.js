import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {

  const appVersion = '0.2.321';
  const menu = ['About', 'Products', 'Price', 'Contact']

  return (
    <div className="App">
      <Header version={appVersion} menu={menu}/>

      <h1>Hello</h1>

      <Footer v={appVersion} menu={menu}/>
    </div>
  );
}

export default App;
