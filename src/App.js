import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import About from "./About";
import ToDoList from "./ToDoList";
import TimeTracker from "./TimeTracker";

const views = {
  about: <About />,
  toDoList: <ToDoList />,
};

const App = () => {
  const [value, setValue] = useState("about");

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Tabs
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
          >
            <Tab label="About" value="about"></Tab>
            <Tab label="To Do List" value="toDoList"></Tab>
          </Tabs>
          <TimeTracker />
        </Toolbar>
      </AppBar>
      {views[value]}
    </>
  );
};

export default App;
