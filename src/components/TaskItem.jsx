import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import taskAPI from "../api/taskAPI";

export default function TaskItem({ task, onTaskDeleted }) {
  const handleDelete = async () => {
    try {
      await taskAPI.deleteTask(task.id);
      onTaskDeleted(task.id); // update list immediately
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="start">
          <Box>
            <Typography variant="subtitle1">{task.task}</Typography>
            <Typography variant="body2" color="textSecondary">
              {task.description}
            </Typography>
          </Box>
          <Button variant="outlined" size="small" color="secondary" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
