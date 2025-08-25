import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import axios from "axios";

const API_URL = "http://localhost:8080/api/tasks"; 

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleAddTask = async (task) => {
    try {
      const response = await axios.post(API_URL, task);
      setTasks((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleDoneTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#f5f5f5",
      }}
    >
      <Card sx={{ width: "80%", maxWidth: 900, p: 3, boxShadow: 4 }}>
        <CardContent sx={{ display: "flex" }}>
          <AddTaskForm onAdd={handleAddTask} />

          <Box sx={{ flex: 1, pl: 3 }}>
            <Typography variant="h6" gutterBottom>
              Task List
            </Typography>
            <TaskList tasks={tasks} onDone={(i) => handleDoneTask(tasks[i].id)} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default App;
