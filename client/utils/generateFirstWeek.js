import moment from 'moment';

const generateFirstWeek = (year, month) => {
  const firstWeek = [];
  const firstDay = moment()
    .year(year)
    .month(month)
    .startOf('month')
    .format('d');
  const firstDayIndex = parseInt(firstDay);
 
  for (let i = 0; i < 7; i += 1) {
    const firstDayOfMonth = moment()
      .year(year)
      .month(month)
      .startOf('month');

    if (i < firstDayIndex) {
      firstWeek.push(firstDayOfMonth.subtract((firstDayIndex - i), 'days'));
    } else if (i === firstDayIndex) {
      firstWeek.push(firstDayOfMonth);
    } else {
      firstWeek.push(firstDayOfMonth.add((i - firstDayIndex), 'days'));
    }
  }

  return firstWeek;
};

export default generateFirstWeek;
