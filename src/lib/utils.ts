import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as chrono from "chrono-node";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const formatter = new Intl.NumberFormat("en-IN", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export const amountFormatter = (value: string | number | undefined) => {
  if (value || value === 0) {
    return formatter.format(value as number);
  }
  return "";
};

export const parseDateTime = (str: Date | string) => {
  if (str instanceof Date) return str;
  return chrono.parseDate(str);
};

export const formatDateTime = (datetime: Date | string) => {
  return new Date(datetime).toLocaleTimeString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
