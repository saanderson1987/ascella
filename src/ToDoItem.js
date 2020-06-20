import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCheck, removeToDo } from "./redux/toDos";
import EditToDoModal from "./EditToDoModal";

const ToDoItem = ({ item: { checked, text }, index }) => {
  const [isEditToDoModalVisible, setIsEditToDoModalVisible] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => dispatch(toggleCheck(index))}
      />
      <span>{text}</span>
      <button onClick={() => setIsEditToDoModalVisible(true)}>Edit</button>
      {isEditToDoModalVisible && (
        <EditToDoModal
          initialText={text}
          index={index}
          closeModal={() => setIsEditToDoModalVisible(false)}
        />
      )}
      <button onClick={() => dispatch(removeToDo(index))}>Remove</button>
    </>
  );
};

export default ToDoItem;
