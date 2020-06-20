import React from "react";
import Grid from "@material-ui/core/Grid";

const ButtonRow = ({ children }) => (
  <Grid container spacing={2} justify="space-between">
    {children.map((child) => (
      <Grid item>{child}</Grid>
    ))}
  </Grid>
);

export default ButtonRow;
