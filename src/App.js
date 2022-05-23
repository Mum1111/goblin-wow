import * as React from "react";
import { useRoutes } from "react-router-dom";
import routeConfig from "./config/routes";
import Header from "./layout/Header";
import "./App.css";

function App() {
  const element = useRoutes(routeConfig);
  return (
    <div>
      <Header></Header>
      <main>{element}</main>
    </div>
  );
}

export default App;
