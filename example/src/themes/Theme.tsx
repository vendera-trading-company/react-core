import { Dimensions } from "react-native";

const dimensions = Dimensions.get("window");

export const getRelativeHeight = (value: number) => {
  return dimensions.height * value;
};

export const getRelativeWidth = (value: number) => {
  return dimensions.width * value;
};

export const isMobile = () => {
  return Theme.width.screen < 768;
};

export const isTablet = () => {
  return Theme.width.screen < 1024;
};

export const isLaptop = () => {
  return Theme.width.screen < 1440;
};

export const isTV = () => {
  return Theme.width.screen < 1440;
};

export const Theme = {
  dimensions: dimensions,
  width: {
    screen: dimensions.width,
    "screen1/2": getRelativeWidth(0.5),
    "screen1/4": getRelativeWidth(0.25),
    "screen2/4": getRelativeWidth(0.5),
    "screen3/4": getRelativeWidth(0.75),
    "screen1/5": getRelativeWidth(0.2),
    "screen2/5": getRelativeWidth(0.4),
    "screen3/5": getRelativeWidth(0.6),
    "screen4/5": getRelativeWidth(0.8),
    "screen1/6": getRelativeWidth(0.166),
    "screen2/6": getRelativeWidth(0.332),
    "screen3/6": getRelativeWidth(0.498),
    "screen4/6": getRelativeWidth(0.664),
    "screen5/6": getRelativeWidth(0.826),
    "screen11/12": getRelativeWidth(0.916),
  },
  height: {
    screen: dimensions.height,
    "screen1/2": getRelativeHeight(0.5),
    "screen1/4": getRelativeHeight(0.25),
    "screen2/4": getRelativeHeight(0.5),
    "screen3/4": getRelativeHeight(0.75),
    "screen1/5": getRelativeHeight(0.2),
    "screen2/5": getRelativeHeight(0.4),
    "screen3/5": getRelativeHeight(0.6),
    "screen4/5": getRelativeHeight(0.8),
    "screen1/6": getRelativeHeight(0.166),
    "screen2/6": getRelativeHeight(0.332),
    "screen3/6": getRelativeHeight(0.498),
    "screen4/6": getRelativeHeight(0.664),
    "screen5/6": getRelativeHeight(0.826),
    "screen11/12": getRelativeHeight(0.916),
  },
  black: "#141414",
  white: "#fff",
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    400: "#9ca3af",
    600: "#4b5563",
  },
  red: {
    50: "#fef2f2",
    200: "#fecaca",
    400: "#f87171",
    600: "#dc2626",
  },
  blue: {
    50: "#eff6ff",
    200: "#bfdbfe",
    400: "#60a5fa",
    600: "#2563eb",
  },
  orange: {
    50: "#fff7ed",
    200: "#fed7aa",
    400: "#fb923c",
    600: "#ea580c",
  },
  primary: {
    default: "#f97316",
    light: "#fed7aa",
    dark: "#9a3412",
  },
};

export default Theme;
