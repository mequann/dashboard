import { useMemo } from "react";
import { data } from "./data"; 


export const useIssueChartData = () => {
  return useMemo(() => {
    const issueCountsPerDay = data.reduce((acc, { date, status, count }) => {
      const countNumber = parseInt(count.split(" ")[0]);
      if (!acc[date]) {
        acc[date] = { Fixed: 0, Closed: 0, New: 0 };
      }
      acc[date][status as "Fixed" | "Closed" | "New"] += countNumber;
      return acc;
    }, {} as Record<string, { Fixed: number; Closed: number; New: number }>);

    return Object.keys(issueCountsPerDay).map((date) => ({
      date,
      ...issueCountsPerDay[date],
    }));
  }, []);
};