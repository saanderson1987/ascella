import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  modal: {
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  header: {
    marginBottom: theme.spacing(4),
  },
}));

const StyledModal = ({ open, onClose, header, children }) => {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.modal}>
        {header && (
          <div className={classes.header}>
            <Typography variant="h6">{header}</Typography>
          </div>
        )}
        {children}
      </div>
    </Modal>
  );
};

export default StyledModal;
