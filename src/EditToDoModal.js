import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editText } from "./redux/toDos";

const EditToDoModal = ({ index, initialText, closeModal }) => {
  const [text, setText] = useState(initialText);
  const dispatch = useDispatch();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          closeModal();
          dispatch(editText({ index, text }));
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

export default EditToDoModal;
