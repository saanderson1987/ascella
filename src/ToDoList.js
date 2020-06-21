import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectToDos } from "./redux/toDos";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import List from "@material-ui/core/List";
import AddToDoModal from "./AddToDoModal";
import ToDoItem from "./ToDoItem";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(4),
  },
}));

const ToDoList = () => {
  const [isAddToDoModalOpen, setIsAddToDoModalOpen] = useState(false);
  const toDos = useSelector(selectToDos);
  const classes = useStyles();

  return (
    <Paper className={classes.paper} square>
      <Box p={3}>
        <Button
          onClick={() => setIsAddToDoModalOpen(true)}
          startIcon={<AddCircleIcon />}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </Box>
      <AddToDoModal
        open={isAddToDoModalOpen}
        onClose={() => setIsAddToDoModalOpen(false)}
      />
      <List>
        {toDos.map((item, index) => (
          <ToDoItem item={item} index={index} key={index} />
        ))}
      </List>
    </Paper>
  );
};

export default ToDoList;
