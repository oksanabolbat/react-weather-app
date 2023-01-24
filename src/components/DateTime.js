const DateTime = (props) => {
  // function convertDateToShortDay(date) {
  //   let shortDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  //   return shortDays[new Date(date * 1000).getDay()];
  // }
  //   const shortDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const days = [
    ['Sunday', 'Sun'],
    ['Monday', 'Mon'],
    ['Tuesday', 'Tue'],
    ['Wednesday', 'Wed'],
    ['Thursday', 'Thu'],
    ['Friday', 'Fri'],
    ['Saturday', 'Sat'],
  ];
  console.log(props);

  let currDate = new Date(props.date.date * 1000);

  return (
    <>
      {props.date.format === 'long' ? (
        <span>{days[currDate.getDay()][0]}</span>
      ) : (
        <>
          <span>{days[props.date.date][1]}</span> <br />
        </>
      )}

      {props.date.format === 'long' && (
        <span>{` ${
          currDate.getHours() > 9
            ? currDate.getHours()
            : `0${currDate.getHours()}`
        }:${
          currDate.getMinutes() > 9
            ? currDate.getMinutes()
            : `0${currDate.getMinutes()}`
        }`}</span>
      )}
    </>
  );
};

export default DateTime;
