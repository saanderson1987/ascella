import React, { useState } from "react";
import About from "./About";
import ToDoList from "./ToDoList";

const App = () => {
  const [view, setView] = useState("");
  return (
    <div>
      <button onClick={() => setView("about")}>About</button>
      <button onClick={() => setView("to-do-list")}>To Do List</button>
      {view === "about" && <About />}
      {view === "to-do-list" && <ToDoList />}
    </div>
  );
};

export default App;
