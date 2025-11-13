import { IChartData } from './TaskOverViewType';

export const transformChartData = (data: IChartData) => {
  return data.months.map((month, index) => ({
    month,
    revenue: data.revenue[index],
    activeProjects: data.activeProjects[index],
    projectCounts: data.projectCounts[index]
  }));
};
