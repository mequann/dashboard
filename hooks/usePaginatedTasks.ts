import { useState } from "react";
import { useTasks } from "@/features/todoList/useTask";

export const usePaginatedTasks = () => {
  const { taskss } = useTasks();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const paginatedTasks = taskss.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    taskss,
    paginatedTasks,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};
