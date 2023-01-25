import OneDay from './OneDay';

const WeeklyForecast = (props) => {
  return (
    <div className="row justify-content-around my-3  fw-light">
      {props.data.map((day, i) => (
        <OneDay day={day} units={props.units} key={i} />
      ))}
    </div>
  );
};

export default WeeklyForecast;
