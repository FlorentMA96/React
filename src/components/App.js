import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "../css/bootstrap.min.css";
import "../css/App.css";
import "../css/all.min.css";
import CounterClass from "./CounterClass.js";
import CounterFunction from "./CounterFunction.js";
import StateLift from "./StateLift";
import ViewUpdate from "./ViewUpdate";
import Bootstrap from "./Bootstrap";
import FetchController from "./FetchController";
import Inheritence from "./Inheritence";
import Composition from "./Composition";
import Context from "./Context";

export const myContext = createContext();

function HelloWorld() {
  ReactDOM.render(
    <h1>Hello World !</h1>,
    document.getElementById('root')
  );
};

function HelloWorldJSX() {
  return (
    <h1>Hello World !</h1>
  );
}

class InnerComponent extends React.Component {
  render() {
    return (
      <div className="margin-1" class="inner">
      Je suis un composant (de classe) interne.
      </div>
    );
  }
}


export default function App() {

  return (
    <div>
      <BrowserRouter>
        <div className="bg-light pt-3 pb-2 ">
          <ol>
            <li><i class="fa-solid fa-house padding-5"></i><Link to="./">Home</Link></li>
            <li><Link to="/hello/world/jsx">Hello World JSX</Link></li>
            <li><Link to="/component/class/inner">Composant Classe Interne</Link></li>
            <li><Link to="/component/counterclass">Counter Classe</Link></li>
            <li><Link to="/component/function">Composant fonctionnel</Link></li>
            <li><Link to="/state/lift">Remonter l'état</Link></li>
            <li><Link to="/view/update">Voir l'udpdate</Link></li>
            <li><Link to="/view/bootstrap">Bootstrap</Link></li>
            <li><Link to="/view/fetchcontroller">Fetchview</Link></li>
            <li><Link to="/view/inheritence">Inheritence</Link></li>
            <li><Link to="/view/composition">Composition</Link></li>
            <li><Link to="/view/context">Context</Link></li>
          </ol>
        </div>
        <hr className="mt-0"/>
        <div>
           <Routes>
              <Route exact path="./" element={<App />}></Route>
              <Route exact path="/hello/world/jsx" element={<HelloWorldJSX />}></Route>
              <Route exact path="/component/class/inner" element={<InnerComponent />}></Route>
              <Route exact path="/component/counterclass" element={<CounterClass />}></Route>
              <Route exact path="/component/function" element={<CounterFunction />}></Route>
              <Route exact path="/state/lift" element={<StateLift />}></Route>
              <Route exact path="/view/bootstrap" element={<Bootstrap />}></Route>
              <Route exact path="/view/fetchcontroller" element={<FetchController />}></Route>
              <Route exact path="/view/inheritence" element={<Inheritence />}></Route>
              <Route exact path="/view/composition" element={<Composition />}></Route>
              <Route exact path="/view/context" element={<Context />}></Route>
           </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}