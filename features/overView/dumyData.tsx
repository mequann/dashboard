import {
  Work as WorkIcon,
  PlayCircleFilled as PlayCircleFilledIcon,
  AccessTime as AccessTimeIcon,
  Group as GroupIcon,
  AssignmentLate as AssignmentLateIcon,
  Speed as SpeedIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from "@mui/icons-material";

import { IOverViewInterface } from "./overViewInterface";

export const dummyData: IOverViewInterface = {
  data: [
    {
      icon: <WorkIcon />,
      title: "Total Projects",
      count: 120,
      status: "On Track",
      rate: 65,
      rateIcon: <TrendingUpIcon />,
    },
    {
      icon: <PlayCircleFilledIcon />,
      title: "Active Projects",
      count: 45,
      status: "Active",
      rate: 12,
      rateIcon: <TrendingUpIcon />,
    },
    {
      icon: <AccessTimeIcon />,
      title: "Hours Spent",
      count: 3400,
      status: "Stable",
      rate: 5,
      rateIcon: <TrendingUpIcon />,
    },
    {
      icon: <GroupIcon />,
      title: "Members",
      count: 80,
      status: "Growing",
      rate: 10,
      rateIcon: <TrendingUpIcon />,
    },
    {
      icon: <AssignmentLateIcon />,
      title: "Due Tasks",
      count: 18,
      status: "Needs Attention",
      rate: 20,
      rateIcon: <TrendingDownIcon />,
    },
    {
      icon: <SpeedIcon />,
      title: "Productivity",
      count: 78,
      status: "Good",
      rate: 8,
      rateIcon: <TrendingUpIcon />,
    },
  ],
};
