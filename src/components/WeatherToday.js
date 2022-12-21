import classes from './WeatherToday.module.css';
import { icons } from '../api/api';
import DateTime from './DateTime';

const WeatherToday = (props) => {
  console.log(props.data);

  return (
    <div className="row">
      <div className="col-7">
        <div className="row">
          <div className="col-3">
            {props.data.icon && (
              <img
                alt={props.data.description}
                src={`https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
                  icons[props.data.icon][0]
                }.png`}
              />
            )}
          </div>
          <div className="col-4 text-end">
            <span className={classes.temperature}>{props.data.temp}</span>
            <div className={classes.measurements}>
              <span
                className={`btn btn-link ${
                  props.units === 'metric' ? classes['units-active'] : ''
                }`}
                onClick={() => {
                  props.changeUnits('metric');
                }}
              >
                °C
              </span>{' '}
              |
              <span
                className={`btn btn-link ${
                  props.units === 'imperial' ? classes['units-active'] : ''
                }`}
                onClick={() => {
                  props.changeUnits('imperial');
                }}
              >
                °F
              </span>
            </div>
          </div>
          <div className="col-5">
            <ul className="mt-3">
              <li className={classes.description}>
                <span>{props.data.description}</span>
              </li>
              <li>
                Humidity: <span>{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span>{props.data.wind}</span>{' '}
                {props.units === 'metric' ? 'm/s' : 'nmph'}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-5 text-end">
        <h1>{props.data.city}</h1>
        <ul className="fs-6 lh-2">
          <li>Last updated:</li>
          <li>
            {/* <span>Dayname</span> <span>00:00</span> */}
            <DateTime date={props.data.time} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherToday;
