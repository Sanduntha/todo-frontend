import React from "react";
import { Grid } from "@mui/material";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onDone }) => {
  return (
    <Grid container spacing={2}>
      {tasks.map((task, index) => (
        <Grid item xs={12} key={index}>
          <TaskCard task={task} onDone={() => onDone(index)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskList;
