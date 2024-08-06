export function dateExtractor(dateString: string) {
  const date = new Date(dateString);
  return {
    date: date.getDate(),
    year: date.getFullYear(),
    day: date.getDay(),
    month: date.getMonth(),
    time: date.getTime(),
    hour: date.getHours(),
    minutes: date.getMinutes(),
  };
}
