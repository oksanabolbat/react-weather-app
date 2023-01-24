import OneDay from './OneDay';

const WeeklyForecast = (props) => {
  console.log(props.data);
  return (
    <div className="row justify-content-around my-3  fw-light">
      {props.data.map((day) => (
        <OneDay day={day} />
      ))}
    </div>
  );
};

export default WeeklyForecast;
