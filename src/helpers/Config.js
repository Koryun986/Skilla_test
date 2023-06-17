export function formatDaysBeforeToDate (days) {
  let date = new Date();
  date.setDate(date.getDate() - days);
  return convertDate(date);
}

export function convertDate(date) {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();
    const day  = date.getDate().toString();

    const monthChars = month.split('');
    const dayChars = day.split('');

    const result = year + '-' + (monthChars[1]?month:"0"+monthChars[0]) + '-' + (dayChars[1]?day:"0"+dayChars[0]);
  return result;
}