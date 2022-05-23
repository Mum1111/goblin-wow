import './App.css';
import * as React from "react";
import {  useRoutes } from "react-router-dom";
import routeConfig from "./config/routes";




function App() {
  const element = useRoutes(routeConfig)
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      {element}
    </div>
  );
}


export default App;
