// "use client";

// import React, { useState } from "react";
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
//   Paper, Typography, Checkbox, IconButton, TablePagination
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useTasks } from "./useTask";

// const TaskList = () => {
//   const { taskss } = useTasks();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(4);
//   const [selected, setSelected] = useState<number[]>([]);

//   const handleCheckboxToggle = (id: number) => {
//     setSelected((prev) =>
//       prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
//     );
//   };

//   const handleChangePage = (_: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0); // Reset to first page when changing rows per page
//   };

//   const paginatedTasks = taskss.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   return (
//     <TableContainer component={Paper} elevation={3}>
//       <Typography variant="h6" sx={{ p: 2 }}>
//         Task List
//       </Typography>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell padding="checkbox" />
//             <TableCell>Task Name</TableCell>
//             <TableCell>Assigned To</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Due Date</TableCell>
//             <TableCell align="center">Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {paginatedTasks.map((task) => (
//             <TableRow key={task.id} hover selected={selected.includes(task.id)}>
//               <TableCell padding="checkbox">
//                 <Checkbox
//                   checked={selected.includes(task.id)}
//                   onChange={() => handleCheckboxToggle(task.id)}
//                 />
//               </TableCell>
//               <TableCell>{task.name}</TableCell>
//               <TableCell>{task.Assignedto}</TableCell>
//               <TableCell>{task.status}</TableCell>
//               <TableCell>{task.dueDate}</TableCell>
//               <TableCell align="center">
//                 <IconButton color="primary" onClick={() => console.log("Edit", task.id)}>
//                   <EditIcon />
//                 </IconButton>
//                 <IconButton color="error" onClick={() => console.log("Delete", task.id)}>
//                   <DeleteIcon />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       <TablePagination
//         component="div"
//         count={taskss.length}
//         page={page}
//         onPageChange={handleChangePage}
//         rowsPerPage={rowsPerPage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//         rowsPerPageOptions={[4, 8, 12, 16]}
//       />
//     </TableContainer>
//   );
// };

// export default TaskList;
"use client";

import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Box,
  Paper, Typography, TablePagination
} from "@mui/material";

import { usePaginatedTasks } from "@/hooks/usePaginatedTasks";
import TaskRow from "./TaskRow";
import DropDownSelector from "@/shared/ui/DropDownSlector";

const timeOptions = ["This Day", "This Week", "This Month", "This Year", "All Time"];
const TaskList = () => {
  const {
    taskss,
    paginatedTasks,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePaginatedTasks();

  const [selected, setSelected] = useState<number[]>([]);
  
   const [selectedTime, setSelectedTime] = useState("This Month");

  const handleCheckboxToggle = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleTimeChange = (value: string) => {
    setSelectedTime(value);
  };

  return (
    <TableContainer component={Paper} elevation={3}>
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Task List
      </Typography>
      <DropDownSelector
          // label="Filter By Time"
          data={timeOptions}
          value={selectedTime}
          onChange={handleTimeChange}
          label="select"
          showLabel={true}
        />

      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell>Task Name</TableCell>
            <TableCell>Assigned To</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedTasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              selected={selected.includes(task.id)}
              onToggle={() => handleCheckboxToggle(task.id)}
            />
          ))}
        </TableBody>
      </Table>

      <TablePagination
        component="div"
        count={taskss.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[4, 8, 12, 16]}
      />
    </TableContainer>
  );
};

export default TaskList;
