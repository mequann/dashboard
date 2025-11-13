"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "@/features/dashboard/Dashboard";
import  Header  from "@/shared/layout/Header";
import React, { useState } from "react";
import EtDatePicker from "mui-ethiopian-datepicker";
export default function Home() {
  const [date, setDate] = useState<any>(null);
  return (
    <div className={styles.page}>
     <Dashboard />
     {/* <Header /> */}
     <EtDatePicker
      label="Document Date"
      onChange={(selectedDate: Date) => {
        setDate(selectedDate);
      }}
      value={date}
      // minDate={new Date("2018-08-20")}
      // maxDate={new Date("2034-08-26")}
      
      // other TextField props here, except InputProps
    />
    </div>
  );
}
