export interface IssueSummaryProps {
  date: string;
  status: "Fixed" | "Closed" | "New";
  title: string;
  count: string;
  icon: React.ReactNode;
}
export interface IChartDataItem {
    date: string;
    Fixed: number;
    Closed: number;
    New: number;
  }
