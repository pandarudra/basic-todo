import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Components/Card";

ReactDOM.render(
  <>
    <div className="w-full h-screen bg-yellow-300 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">---TASKER---</h1>
      <h2 className="text-2xl capitalize font-bold">Add your tasks Here</h2>

      <Card />
    </div>
  </>,
  document.getElementById("root")
);
