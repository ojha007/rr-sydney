import { format } from "date-fns";
export const getFormattedDate = (date: Date) => {
  if (!date) return "";
  format(new Date(date), "mm-dd-yyyy");
};

export const formatDate = (date: Date | string) => {
  if (!date) return "";
  date = typeof date === "string" ? new Date(date) : date;
  return format(date, "yyyy-MM-dd");
};
