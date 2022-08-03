import React, {Component} from 'react';
import "./App.css";
import MyFirstClassComponent from "./components/MyFirstClassComponent/index";
import Layout from "./containers/Layout";
import {ExampleComponent, Hidden} from './components/FunctionalHook/index';
import {MyfunctionTodos, MyCountComponent} from './components/FunctionalHook/indexUseEffect';

function App() {
  const message = true;
  return (
    <div className="App">
      {/* <MyfunctionTodos/> */}
      <MyCountComponent/>
      {/* <Hidden/> */}
      {/* <ExampleComponent/>
      <MyFirstClassComponent /> */}
      {/* <Layout /> */}
    </div>
  );
}

export default App;
