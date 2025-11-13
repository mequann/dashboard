import React, { ReactNode } from "react";

export interface IOverviewCardInterface {
    icon: ReactNode;
    title: string;
    count: number;
    status: string;
    rate: number;
    rateIcon: ReactNode;
  }
  export interface IOverViewInterface {
    data: IOverviewCardInterface[];
  }
  