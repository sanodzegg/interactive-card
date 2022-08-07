import React, { useState } from "react";
import Form from "./comps/formComp/form";
import "./App.css";
import Design from "./comps/designComp/design";

function App() {

  const [globalCardNum, setGlobalCardNum] = useState("");
  const [globalName, setGlobalName] = useState("");
  const [globalMonth, setGlobalMonth] = useState("");
  const [globalYear, setGlobalYear] = useState("");
  const [globalCVC, setGlobalCVC] = useState("");

  return (
    <section className="mainSectionWrapper">
        <Design globalCardNum={globalCardNum} globalName={globalName} globalMonth={globalMonth} globalYear={globalYear} globalCVC={globalCVC} />
        <Form setGCN={setGlobalCardNum} setGN={setGlobalName} setGM={setGlobalMonth} setGY={setGlobalYear} setGCVC={setGlobalCVC} />
    </section>
  );
}

export default App;
