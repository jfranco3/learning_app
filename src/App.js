import React, {Component} from 'react';
import "./App.css";
import MyFirstClassComponent from "./components/MyFirstClassComponent/index";
import Layout from "./containers/Layout";

function App() {
  const message = true;
  return (
    <div className="App">
      <MyFirstClassComponent />
      <Layout />
    </div>
  );
}

export default App;
