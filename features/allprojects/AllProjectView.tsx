"use client";
import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  IconButton, Avatar, AvatarGroup, TablePagination
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { IProject } from './type';

interface ProjectTableProps {
  projects: IProject[];
  onEdit?: (project: IProject) => void;
  onDelete?: (project: IProject) => void;
}

const ProjectTable: React.FC<ProjectTableProps> = ({ projects, onEdit, onDelete }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);  

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedProjects = projects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Project</strong></TableCell>
            <TableCell><strong>Budget (ETB)</strong></TableCell>
            <TableCell><strong>Members</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
            <TableCell><strong>Due Date</strong></TableCell>
            <TableCell><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedProjects.map((project, index) => (
            <TableRow key={index}>
              <TableCell>{project.fileName}</TableCell>
              <TableCell>{project.budget.toLocaleString()}</TableCell>
              <TableCell>
                <AvatarGroup max={5}>
                  {Array.from({ length: project.members }).map((_, i) => (
                    <Avatar key={i}>
                      {project.fileName.charAt(0).toUpperCase()}
                    </Avatar>
                  ))}
                </AvatarGroup>
              </TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>{new Date(project.dueDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <IconButton color="primary" onClick={() => onEdit?.(project)}>
                  <Edit />
                </IconButton>
                <IconButton color="error" onClick={() => onDelete?.(project)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    
      <TablePagination
        component="div"
        count={projects.length}  
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[4, 8, 12]}  
      />
    </TableContainer>
  );
};

export default ProjectTable;
