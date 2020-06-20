import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectToDos } from "./redux/toDos";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import List from "@material-ui/core/List";
import AddToDoModal from "./AddToDoModal";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const [isAddToDoModalOpen, setIsAddToDoModalOpen] = useState(false);
  const toDos = useSelector(selectToDos);

  return (
    <Container>
      <Button
        onClick={() => setIsAddToDoModalOpen(true)}
        startIcon={<AddCircleIcon />}
      >
        Add
      </Button>
      <AddToDoModal
        open={isAddToDoModalOpen}
        onClose={() => setIsAddToDoModalOpen(false)}
      />
      <List>
        {toDos.map((item, index) => (
          <ToDoItem item={item} index={index} key={index} />
        ))}
      </List>
    </Container>
  );
};

export default ToDoList;
