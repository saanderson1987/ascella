import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "./redux/toDos";
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

const AddNoteModal = ({ toDoIndex, open, onClose }) => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Modal header="Add Note" open={open} onClose={onClose}>
      <form>
        <div className={classes.input}>
          <TextField
            label="Note Text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </div>
        <ButtonRow>
          <Button
            onClick={() => {
              onClose();
              dispatch(addNote({ toDoIndex, note }));
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

export default AddNoteModal;
