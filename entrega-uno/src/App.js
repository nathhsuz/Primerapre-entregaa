import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "../src/components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Nathalia Garcia"/>
    </>
  );
}

export default App;
