import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PrincipaisProdutos from "./components/PrincipaisProdutos/PrincipaisProdutos";
import ProdutoPromocional from "./components/ProdutoPromocional/ProdutoPromocional";
import WeekHots from "./components/WeekHots/WeekHots";

function App() {
  return (
    <>
      <Header />
      <PrincipaisProdutos />
      <ProdutoPromocional />
      <WeekHots />
    </>
  );
}

export default App;
