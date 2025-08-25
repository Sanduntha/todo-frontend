import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import taskAPI from "../api/taskAPI";

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    if (!title.trim()) return;
    try {
      const response = await taskAPI.createTask({ task: title, description });
      onTaskAdded(response.data); // update right side immediately
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h6">Add Task</Typography>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        label="Description"
        value={description}
        multiline
        rows={4}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>
    </Box>
  );
}
    