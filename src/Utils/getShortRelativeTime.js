import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

export const getShortRelativeTime = (date) => {
  const now = new Date();
  const past = new Date(date);

  const minutes = differenceInMinutes(now, past);
  if (minutes < 60) return `${minutes}m`;

  const hours = differenceInHours(now, past);
  if (hours < 24) return `${hours}h`;

  const days = differenceInDays(now, past);
  if (days < 7) return `${days}d`;

  const weeks = differenceInWeeks(now, past);
  if (weeks < 4) return `${weeks}w`;

  const months = differenceInMonths(now, past);
  if (months < 12) return `${months}mo`;

  const years = differenceInYears(now, past);
  return `${years}y`;
};
