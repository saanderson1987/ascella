import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeNote } from "./redux/toDos";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import EditNoteModal from "./EditNoteModal";

const NoteItem = ({ note, noteIndex, toDoIndex }) => {
  const [isEditNoteModalOpen, setIsEditNoteModalOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <ListItem>
        <ListItemText primary={note} />
        <IconButton onClick={() => setIsEditNoteModalOpen(true)}>
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => dispatch(removeNote({ toDoIndex, noteIndex }))}
        >
          <RemoveCircleIcon />
        </IconButton>
      </ListItem>
      <EditNoteModal
        initialNote={note}
        noteIndex={noteIndex}
        toDoIndex={toDoIndex}
        open={isEditNoteModalOpen}
        onClose={() => setIsEditNoteModalOpen(false)}
      />
    </>
  );
};

export default NoteItem;
