import React from "react";
import Header from "./Component/Header/Header";
import PageOne from "./Component/PageOne/PageOne";
import Slide from "./Component/Slide/Slide";
import Section from "./Component/Section/Section";
import { data } from "./Component/Data";
import Card from "./Component/Card";
import Counter from "./Component/Counter/Counter";



function App() {

  return (
    <>
      <Header />
      <PageOne />
      <Slide /> 
      {/* <Section data={a}/>
      <Section />
      <Section /> */}
      <Card data={data}/>
      <Counter />
    </>
  );
}

export default App;