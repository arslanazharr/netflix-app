import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";

const App = () => {
  const ncard = (val) => {
    return (
      <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
    );
  };

  ReactDOM.render(
    <>
      <h1>List of Top 5 Netflix Series</h1>
      {Sdata.map(ncard)}
    </>,
    document.getElementById("root")
  );
};

export default App;
