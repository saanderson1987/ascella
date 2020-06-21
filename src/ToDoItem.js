import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCheck, removeToDo } from "./redux/toDos";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import EditToDoModal from "./EditToDoModal";
import ToDoNotesModal from "./ToDoNotesModal";

const useStyles = makeStyles({
  textButton: {
    textAlign: "left",
    textTransform: "none",
  },
});

const ToDoItem = ({ item: { checked, text }, index }) => {
  const [isEditToDoModalOpen, setIsEditToDoModalOpen] = useState(false);
  const [isToDoNotesModalOpen, setIsToDoNotesModalOpen] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <ListItem>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            onChange={() => dispatch(toggleCheck(index))}
          />
        </ListItemIcon>
        <Button
          onClick={() => setIsToDoNotesModalOpen(true)}
          fullWidth
          className={classes.textButton}
        >
          <ListItemText primary={text} />
        </Button>
        <IconButton onClick={() => setIsEditToDoModalOpen(true)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => dispatch(removeToDo(index))}>
          <RemoveCircleIcon />
        </IconButton>
      </ListItem>
      <EditToDoModal
        initialText={text}
        index={index}
        open={isEditToDoModalOpen}
        onClose={() => setIsEditToDoModalOpen(false)}
      />
      <ToDoNotesModal
        toDoIndex={index}
        open={isToDoNotesModalOpen}
        onClose={() => setIsToDoNotesModalOpen(false)}
      />
    </>
  );
};

export default ToDoItem;
