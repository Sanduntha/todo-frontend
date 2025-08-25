import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const AddTaskForm = ({ onAdd }) => {
  const [task, setTask] = useState({ title: "", description: "" });

  const handleAdd = () => {
    if (task.task && task.description) {
      onAdd(task);
      setTask({ task: "", description: "" });
    }
  };

  return (
    <Box sx={{ width: "30%", borderRight: "1px solid #ccc", pr: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add a Task
      </Typography>
      <TextField
        label="Title"
        fullWidth
        margin="normal"
        value={task.task}
        onChange={(e) => setTask({ ...task, task: e.target.value })}
      />
      <TextField
        label="Description"
        fullWidth
        margin="normal"
        multiline
        rows={3}
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
   <Button
  variant="contained"
  size="small"
  sx={{ mt: 2, bgcolor: "blue", width: "150px",ml:30 }} // set your desired width
  onClick={handleAdd}
>
  Add
</Button>

    </Box>
  );
};

export default AddTaskForm;
