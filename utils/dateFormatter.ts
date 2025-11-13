export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);

  const day = date.getDate(); 
  const year = date.getFullYear();
  const monthName = date.toLocaleString("en-US", { month: "long" });

  return `${day} ${monthName} ${year}`;
};
