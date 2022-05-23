import './App.css';
import * as React from "react";
import {  useRoutes } from "react-router-dom";
import routeConfig from "./config/routes";
import Header from "./layout/Header";




function App() {
  const element = useRoutes(routeConfig)
  return (
    <div className="App">
      <Header></Header>
      {element}
    </div>
  );
}


export default App;
