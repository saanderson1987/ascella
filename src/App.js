import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import About from "./About";
import ToDoList from "./ToDoList";

const views = {
  about: <About />,
  toDoList: <ToDoList />,
};

const App = () => {
  const [value, setValue] = useState("about");

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={(event, newValue) => setValue(newValue)}>
          <Tab label="About" value="about"></Tab>
          <Tab label="To Do List" value="toDoList"></Tab>
        </Tabs>
      </AppBar>
      {views[value]}
    </>
  );
};

export default App;
