
import { useState, useEffect } from "react";
import {tasks} from "./data";
import { ITask } from "./taskType";



export const useTasks = () => {
  const [taskss, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      await new Promise((res) => setTimeout(res, 300));
      setTasks(tasks);
    };

    loadTasks();
  }, []);

  return { taskss };
};
