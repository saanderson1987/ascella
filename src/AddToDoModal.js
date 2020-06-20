import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./redux/toDos";

const AddToDoModal = ({ closeModal }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          closeModal();
          dispatch(addToDo(text));
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Save" />
        <button onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
};

export default AddToDoModal;
