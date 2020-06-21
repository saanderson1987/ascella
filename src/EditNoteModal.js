import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editNote } from "./redux/toDos";
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

const EditToDoModal = ({
  noteIndex,
  toDoIndex,
  initialNote,
  open,
  onClose,
}) => {
  const [note, setNote] = useState(initialNote);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Modal header="Edit Note" open={open} onClose={onClose}>
      <form>
        <TextField
          label="Note Text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          variant="outlined"
          fullWidth
          className={classes.input}
        />
        <ButtonRow>
          <Button
            onClick={() => {
              onClose();
              dispatch(editNote({ toDoIndex, noteIndex, note }));
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
