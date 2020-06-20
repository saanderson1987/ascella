import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectToDos } from "./redux/toDos";
import AddToDoModal from "./AddToDoModal";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const [isAddToDoModalVisible, setIsAddToDoModalVisible] = useState(false);
  const toDos = useSelector(selectToDos);
  return (
    <div>
      <h1>To-Do List</h1>
      <button onClick={() => setIsAddToDoModalVisible(true)}>Add</button>
      {isAddToDoModalVisible && (
        <AddToDoModal closeModal={() => setIsAddToDoModalVisible(false)} />
      )}
      {toDos.map((item, index) => (
        <ToDoItem item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default ToDoList;
