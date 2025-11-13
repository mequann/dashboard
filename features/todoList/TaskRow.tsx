import {
    TableRow, TableCell, Checkbox, IconButton
  } from "@mui/material";
  import EditIcon from "@mui/icons-material/Edit";
  import DeleteIcon from "@mui/icons-material/Delete";
  import {ITask} from"./taskType"
  

  
  interface TaskRowProps {
    task: ITask;
    selected: boolean;
    onToggle: () => void;
  }
  
  const TaskRow: React.FC<TaskRowProps> = ({ task, selected, onToggle }) => {
    return (
      <TableRow hover selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onChange={onToggle} />
        </TableCell>
        <TableCell>{task.name}</TableCell>
        <TableCell>{task.Assignedto}</TableCell>
        <TableCell>{task.status}</TableCell>
        <TableCell>{task.dueDate}</TableCell>
        <TableCell align="center">
          <IconButton color="primary" onClick={() => console.log("Edit", task.id)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => console.log("Delete", task.id)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  };
  
  export default TaskRow;
  