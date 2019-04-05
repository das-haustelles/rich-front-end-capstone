import moment from 'moment';
import generateFirstWeek from './generateFirstWeek';

const generateDates = (year, month) => {
  const dates = [];
  const firstWeek = generateFirstWeek(year, month);
  dates.push(firstWeek);

  for (let i = 0; i < 5; i += 1) {
    const week = dates[dates.length - 1];
    const nextWeek = week.map((date) => {
      return moment(date).add(7, 'days');
    });
    dates.push(nextWeek);
  }

  return dates;
};

export default generateDates;
