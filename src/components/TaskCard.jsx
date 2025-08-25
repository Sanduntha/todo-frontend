import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const TaskCard = ({ task, onDone }) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        bgcolor: "#e0e0e0",
      }}
    >
      <CardContent>
       <Typography variant="h6">{task.task}</Typography>
<Typography variant="body2">{task.description}</Typography>

      </CardContent>
      <Box sx={{ pr: 2 }}>
        <Button variant="outlined" color="success" onClick={onDone}>
          Done
        </Button>
      </Box>
    </Card>
  );
};

export default TaskCard;
