const DateTime = (props) => {
  // function convertDateToShortDay(date) {
  //   let shortDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  //   return shortDays[new Date(date * 1000).getDay()];
  // }
  const shortDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const todayDate = new Date(props.date * 1000);
  return (
    <>
      <span>{days[todayDate.getDay()]}</span>
      <span>{` ${
        todayDate.getHours() > 9
          ? todayDate.getHours()
          : `0${todayDate.getHours()}`
      }:${
        todayDate.getMinutes() > 9
          ? todayDate.getMinutes()
          : `0${todayDate.getMinutes()}`
      }`}</span>
    </>
  );
};

export default DateTime;
