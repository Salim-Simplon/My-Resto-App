import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Carte from "./Components/Nav/Carte";
import Commande from "./Components/Nav/Commande";
import Connexion from "./Components/Nav/Connexion";
import Deconnexion from "./Components/Nav/Decnx";

//json-server --watch db.json

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Carte} />
        <Route exact path="/panier" component={Commande} />
        <Route exact path="/connexion" component={Connexion} />
        <Route exact path="/signup" component={Deconnexion} />
      </div>
    </BrowserRouter>
  );
}

export default App;
