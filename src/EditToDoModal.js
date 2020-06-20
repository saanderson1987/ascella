import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editText } from "./redux/toDos";
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

const EditToDoModal = ({ index, initialText, open, onClose }) => {
  const [text, setText] = useState(initialText);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Modal header="Edit To Do Item" open={open} onClose={onClose}>
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
              dispatch(editText({ index, text }));
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
    </Modal>
  );
};

export default EditToDoModal;
