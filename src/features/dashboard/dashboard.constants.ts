import { TransactionType } from "@/interfaces/transactions";

export const expenseVariants = {
  [TransactionType.BILL]: {
    name: "Bills",
    color: "#343C6A",
  },
  [TransactionType.ENT]: {
    name: "Enterntainment",
    color: "#FC7900",
  },
  [TransactionType.INVESTMENT]: {
    name: "Investments",
    color: "#396AFF",
  },
  [TransactionType.OTHER]: {
    name: "Others",
    color: "#232323",
  },
} satisfies Record<TransactionType, { name: string; color: string }>;

export const monthsMap = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

export const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
