import React, { useState } from "react";
import "./App.css";
import NameTag from "./components/NameTag";

//instead of initin inline use ref

//list
//for loop wont work .  use map
//errors with dynamically created list 
//react needs to keep track of indexes
//there are better ways to create unique ids
//i wish Symbol would work but it doesnt
//usually dont use index becase if you delete a row and add a new row.   
// use something from the data to create an id
//there are third party lib avail 
const initNames = [
  {
    firstName: "john",
    lastName: "johnson"
  },
  {
    firstName: "peter",
    lastName: "peterson"
  },
  {
    firstName: "jill",
    lastName: "jillson"
  }
];

function App() {
  const [names, setNames] = useState(initNames);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Name List</h1>
        {/* <NameTag firstName={names[0].firstName} lastName={names[0].lastName} />
        <NameTag firstName={names[1].firstName} lastName={names[1].lastName} />
        <NameTag firstName={names[2].firstName} lastName={names[2].lastName} /> */}

        {names.map((v, i) => {
          return (
            <NameTag key={`${i}{v.firstName}{v.lastName}`} firstName={v.firstName} lastName={v.lastName} />
          );
        })}
      </header>
    </div>
  );
}

export default App;
