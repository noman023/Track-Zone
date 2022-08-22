import { TIMEZONE_OFFSET } from "../constants/timzone";

export const getOffset = (start = -11, end = 12) => {
  const offsets = [];

  for (let i = start; i <= end; i += 0.5) {
    offsets.push(i);
  }
  return offsets;
};

export const getTimezone = () => {
  return [GMT, UTC, ...Object.keys(TIMEZONE_OFFSET)];
};
