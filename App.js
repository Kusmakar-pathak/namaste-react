/* 
<div id="root">
   <div id="parent">
     <div id="child1">
        <h1>Hii, there!</h1>
        <h2>And, I am an H2 tag.</h2>
     </div>
     <div id="child2">
        <h1>Hii, there!</h1>
        <h2>And, I am an H2 tag.</h2>
   </div>
</div>

*/

// React.createElement returns a JS object.
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hii, there!"),
    React.createElement("h2", {}, "And, I am an H2 tag."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hii, there!"),
    React.createElement("h2", {}, "And, I am an H2 tag."),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
