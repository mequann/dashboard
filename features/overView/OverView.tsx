import React from "react";
import { Box, Typography } from "@mui/material";
import OverViewCard from "./Card";
import { dummyData } from "./dumyData";
import IssueSummary from "../issueSummary/IssueSummary";
import TaskList from "@/features/todoList/TaskList";
import TaskPerformanceChart from "../task/taskPerformance/TasksPerformance";
import TaskOverViewComponent from "../task/taskOverview/TaskOverView"
import ProjectTable from "@/features/allprojects/AllProjectView"
import project from "@/features/allprojects/data"

const OverView = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Overview
      </Typography>

      <OverViewCard data={dummyData.data} />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 2,
          mt: 3,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <IssueSummary />
        </Box>

        <Box sx={{ flex: 1 }}>
          <TaskList />
        </Box>
      </Box>
    <Box sx={{display:"flex",
      flexDirection:{xs:"column",md:"row"},
      justifyContent:"space-between",
      gap:2,
      mt:3
    }}>
<Box sx={{flex:1}}>
  <TaskPerformanceChart/>
  </Box>
  <Box sx={{flex:1}}>
    <TaskOverViewComponent/>
    </Box>
      </Box>
      <ProjectTable projects={project}/>
      
      
    </Box>
  );
};

export default OverView;
