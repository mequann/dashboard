"use client";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography } from "@mui/material";
import DropDownSelector from "@/shared/ui/DropDownSlector";
import { useIssueChartData } from "@/features/issueSummary/DataTransformation";

const IssueSummary = () => {
  const timeOptions = ["This Day", "This Week", "This Month", "This Year", "All Time"];
  const data = useIssueChartData();
  const [selectedTime, setSelectedTime] = useState("This Month");

  const handleTimeChange = (value: string) => {
    setSelectedTime(value);
  };

  return (
    <Box p={3} bgcolor="background.paper" borderRadius={2} boxShadow={2}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        mb={2}
      >
        <Typography variant="h6" fontWeight="bold" ml={2}>
          Issue Summary 
        </Typography>
        <DropDownSelector
          // label="Filter By Time"
          data={timeOptions}
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </Box>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Fixed" stackId="a" fill="#4caf50" name="Fixed Issues" />
          <Bar dataKey="Closed" stackId="a" fill="#f44336" name="Closed Issues" />
          <Bar dataKey="New" stackId="a" fill="#ff9800" name="New Issues" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default IssueSummary;
