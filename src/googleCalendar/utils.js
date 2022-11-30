import moment from 'moment';

/**
   * Generate all days in a week
   * @param {moment} currentDate - Any date in the week
   * @returns {array} days - All days in the week with date, dateStamp and weekDayName
  */
export const getAllDaysInTheWeek = (currentDate = moment ()) => {
  const weekStart = currentDate.clone ().startOf ('week');

  const days = Array.from (Array (7))
    .map ((day, index) => index)
    .map (day =>
      moment (weekStart).add (day, 'days').set ('minutes', 0).set ('seconds', 0)
    )
    .map (momentObj => ({
      date: momentObj.date (),
      dateStamp: +momentObj,
      weekDayName: momentObj.format ('ddd'),
    }));

  return days;
};

// All the hours in the day
export const times = [
  1.00,
  1.30,
  2.00,
  2.30,
  3.00,
  3.30,
  4.00,
  4.30,
  5.00,
  5.30,
  6.00,
  6.30,
  7.00,
  7.30,
  8.00,
  8.30,
  9.00,
  9.30,
  10.00,
  10.30,
  11.00,
  11.30,
  12.00,
  12.30,
  13.00,
  13.30,
  14.00,
  14.30,
  15.00,
  15.30,
  16.00,
  16.30,
  17.00,
  17.30,
  18.00,
  18.30,
  19.00,
  19.30,
  20.00,
  20.30,
  21.00,
  21.30,
  22.00,
  22.30,
  23.00,
  23.30
];

/**
   * Generated coordinated for the highlight
   * @param {Object} event - Event object
   * {
   *  start: Time stamp for the start of the event :timeStamp,
   *  title: Title fo the new event :String,
   *  end: Time stamp for the end of the event :timeStamp,
   * }
   * @param {timeStamp} startDate - Timestamp of any date in the current week
   * @returns {Object} coordinates - Coordinates object with
   * {
   *  top - CSS top of the element,
   *  left - CSS left of the element,
   *  width - CSS width of the element,
   *  height - CSS height of the element
   * }
  */
export const generateWeekViewCoordinates = (event, startDate) => {
  const start = moment (event.start);
  const end = moment (event.end);
  const duration = moment.duration (end.diff (start));
  const weekStart = moment (startDate);
  

  // Calculating Top
  // const top = start.minutes () === 30 ? '50%' : '0%';
  const top = 0;

  // const marginTop = start.minutes () === 30 ? '5%' : '0%';

  // Calculating height
  const timeFactor = duration.hours () + duration.minutes () / 60;
  const height = timeFactor * 200;

  let left, width;
  if (weekStart.week () === start.week ()) {
    const weekDay = start.weekday ();
    left = (weekDay + 1) * 12.5;
  }

  if (
    weekStart.week () === start.week () &&
    weekStart.week () === end.week ()
  ) {
    const daysDiff = duration.days ();
    width = (daysDiff + 1) * 12.5 - 2;
  }

  if (weekStart.week () > start.week () && weekStart.week () === end.week ()) {
    const daysDiff = moment
      .duration (
        end.diff (
          weekStart
            .startOf ('week')
            .set ('hours', start.hours ())
            .set ('minutes', start.minutes ())
        )
      )
      .days ();
    width = (daysDiff + 1) * 12.5 - 2;
  }

  if (weekStart.week () > start.week ()) {
    left = 12.5;
  }

  if (weekStart.week () < end.week ()) {
    width = 100 - left;
  }

  return {
    top: top + '%',
    left: left + '%',
    height: height + '%',
    width: width + '%',
    // margin:marginTop+'%',
  };
};

/**
 * Checks if the dateStamp represents todays date
 * @param {dateStamp} dateStamp - Date Stamp to check
 * @return {boolean}
 */
export const isTodaysDate = dateStamp => {
  const today = moment ();
  dateStamp = moment (dateStamp);
  // console.log("today",today,'--',dateStamp)
  return (
    moment.duration (dateStamp.diff (today)).days () === 0 &&
    today.day () === dateStamp.day ()
  );
};


// export const times = [
//   1.00,
//   1.30,
//   2,
//   2.30,
//   3,
//   3.30,
//   4,
//   4.30,
//   5,
//   5.30,
//   6,
//   6.30,
//   7,
//   7.30,
//   8,
//   8.30,
//   9,
//   9.30,
//   10,
//   10.30,
//   11,
//   11.30,
//   12,
//   12.30,
//   13,
//   13.30,
//   14,
//   14.30,
//   15,
//   15.30,
//   16,
//   16.30,
//   17,
//   17.30,
//   18,
//   18.30,
//   19,
//   19.30,
//   20,
//   20.30,
//   21,
//   21.30,
//   22,
//   22.30,
//   23,
//   23.30
// ];

// export const times = [
//   1.30,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
//   21,
//   22,
//   23,
// ];