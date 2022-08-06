import React from "react";
import Form from "./comps/formComp/form";
import "./App.css";
import Design from "./comps/designComp/design";

function App() {
  return (
    <section className="mainSectionWrapper">
        <Design />
        <Form />
    </section>
  );
}

export default App;
