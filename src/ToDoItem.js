import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCheck, removeToDo } from "./redux/toDos";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import EditToDoModal from "./EditToDoModal";

const ToDoItem = ({ item: { checked, text }, index }) => {
  const [isEditToDoModalVisible, setIsEditToDoModalVisible] = useState(false);
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
        <ListItemText primary={text} />
        <IconButton onClick={() => setIsEditToDoModalVisible(true)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => dispatch(removeToDo(index))}>
          <RemoveCircleIcon />
        </IconButton>
      </ListItem>
      <EditToDoModal
        open={isEditToDoModalVisible}
        initialText={text}
        index={index}
        onClose={() => setIsEditToDoModalVisible(false)}
      />
    </>
  );
};

export default ToDoItem;
