// import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./page/Home";
import About from "./page/About";
import Service from "./page/Service";
import Activity from "./page/Activity";
import "./css/app.css";

// import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
   return (
      <>
         <Header />
         <Home />
         <About />
         <Service />
         <Activity />
      </>
   );
}

export default App;
