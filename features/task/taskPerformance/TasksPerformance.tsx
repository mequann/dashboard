import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import PieChartComponent from "./PieChartComponent";
import { chartData } from "./taskChartData";

const TaskPerformanceChart = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Task Status Overview
      </Typography>
      <Box>
        <PieChartComponent
          data={chartData}
          // valueFormatter={formatter}
        />
      </Box>
    </Paper>
  );
};

export default TaskPerformanceChart;
