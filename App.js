import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading1" className="head" tabIndex="-1">
    React Using JSX🚀
  </h1>
);

//Component Composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Functional Component 😍</h1>;
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
