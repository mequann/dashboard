"use client"
import * as React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { transformChartData } from './transformData';
import{chartData}from"./TaskOverViewData"


const TaskOverViewComponent=()=> {
  const data = transformChartData(chartData);
  // console.log(data,"yeses")
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={data}>
        <XAxis dataKey="month" />
        <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} />
        <CartesianGrid strokeDasharray="3 3 " />
        <Tooltip />
        <Legend />

        <Bar dataKey="revenue" fill="#FF5733" name="Revenue (ETB)" />
        <Line type="monotone" dataKey="activeProjects" stroke="#33FF57" name="Active Projects" />
        <Line type="monotone" dataKey="projectCounts" stroke="#3357FF" name="Total Projects" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default TaskOverViewComponent