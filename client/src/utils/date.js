export const toDayMonth = (date) => {
  const dt = new Date(date);
  const d = String(dt.getDate());
  const m = String(dt.getMonth() + 1);
  return (d.length === 1 ? "0" + d : d) + "." + (m.length === 1 ? "0" + m : m);
};

export const toHourMinute = (date) => {
  const dt = new Date(date);
  const h = String(dt.getHours());
  const m = String(dt.getMinutes());
  return (h.length === 1 ? "0" + h : h) + ":" + (m.length === 1 ? "0" + m : m);
};

export const toDate = (date) => {
  const dt = new Date(date);
  return dt.toLocaleDateString();
};

export const getMinimizedDate = (date) => {
  const dt = new Date(date);
  const now = new Date();

  if (now.getFullYear() - dt.getFullYear() > 0) {
    return toDate(date);
  } else if ((now - dt) / (1000 * 60 * 60 * 24) >= 1) {
    return toDayMonth(date);
  } else if ((now - dt) / (1000 * 60 * 60) >= 1) {
    return Math.floor((now - dt) / (1000 * 60 * 60)) + " hr ago";
  } else if ((now - dt) / (1000 * 60) >= 1) {
    return Math.floor((now - dt) / (1000 * 60)) + " min ago";
  } else {
    return Math.floor((now - dt) / (1000)) + " sec ago";
  }
};

export const getDayOfWeek = (date) => {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayOfWeek];
};

export const toPrettyDate = (date) => {
  const dt = new Date(date);
  return (
    getDayOfWeek(date) +
    ", " +
    toHourMinute(date) +
    ", " +
    dt.toLocaleDateString()
  );
};
