import React from "react";
import  ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "This is Zuber here i am learning  ");

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div",
    { id: "parent" },
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{},"i am h1 tag"), ),
);

root.render(parent);
