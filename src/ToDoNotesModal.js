import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectToDoItem } from "./redux/toDos";
import Modal from "./Modal";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import List from "@material-ui/core/List";
import AddNoteModal from "./AddNoteModal";
import NoteItem from "./NoteItem";

const ToDoNotesModalBody = ({ toDoIndex }) => {
  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);
  const { notes } = useSelector(selectToDoItem(toDoIndex));

  return (
    <>
      <Button
        onClick={() => setIsAddNoteModalOpen(true)}
        startIcon={<AddCircleIcon />}
        variant="contained"
        color="primary"
      >
        Add
      </Button>
      <AddNoteModal
        toDoIndex={toDoIndex}
        open={isAddNoteModalOpen}
        onClose={() => setIsAddNoteModalOpen(false)}
      />
      <List>
        {notes.map((note, noteIndex) => (
          <NoteItem
            note={note}
            noteIndex={noteIndex}
            toDoIndex={toDoIndex}
            key={noteIndex}
          />
        ))}
      </List>
    </>
  );
};

export default ({ text, toDoIndex, open, onClose }) => (
  <Modal header={`Notes for "${text}"`} open={open} onClose={onClose}>
    <ToDoNotesModalBody toDoIndex={toDoIndex} />
  </Modal>
);
