/*
<div id="parent">
    <div id ="child1">
    <h1>I'm an h1 Tag</h1>
    <h2>I'm an h2 Tag</h2>
    </div>
    <div id ="child2">
    <h1>I'm an h1 Tag</h1>
    <h2>I'm an h2 Tag</h2>
    </div>
<div/>  

ReactElement(Object)=HTML(Browser Understand) 
*/ 
const parent = React.createElement(
    "div",
    {id:"parent"},[ 
    React.createElement(
    "div",
    {id:"child1"},[
    React.createElement("h1",{},"I am an h1 Tag"),
    React.createElement("h2",{},"I am an h2 Tag")] 
    ),  React.createElement(
        "div",
        {id:"child2"},[
        React.createElement("h1",{},"I am an h1 Tag"),
        React.createElement("h2",{},"I am an h2 Tag")] 
        )]
    );

//JSX      


const heading = React.createElement(
    "h1",{},"Hello World"
);
console.log(parent)
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(parent);