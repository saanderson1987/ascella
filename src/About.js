import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(4),
    padding: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} square>
      <Typography variant="p">
        I am a software developer skilled in JavaScript, Node.js, Typescript,
        React, Redux, GraphQL, Relay, Ruby on Rails, SQL, HTML, and CSS. E-mail
        me at stevenarthuranderson@gmail.com .{" "}
      </Typography>
    </Paper>
  );
};

export default About;
