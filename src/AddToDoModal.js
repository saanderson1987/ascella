import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./redux/toDos";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "./Modal";
import TextField from "@material-ui/core/TextField";
import ButtonRow from "./ButtonRow";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: theme.spacing(4),
  },
}));

const AddToDoModalBody = ({ onClose }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <form>
      <div className={classes.input}>
        <TextField
          label="Item Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
          fullWidth
        />
      </div>
      <ButtonRow>
        <Button
          onClick={() => {
            onClose();
            dispatch(addToDo(text));
          }}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
        <Button onClick={onClose} variant="contained">
          Cancel
        </Button>
      </ButtonRow>
    </form>
  );
};

export default ({ open, onClose }) => (
  <Modal header="Add To Do Item" open={open} onClose={onClose}>
    <AddToDoModalBody onClose={onClose} />
  </Modal>
);
