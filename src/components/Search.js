import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import classes from './Search.module.css';

import { getCityNameByCoords } from '../api/api';

const Search = (props) => {
  const city = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    props.updateCity(city.current.value);
  };
  const currLocationHandler = (event) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      getCityNameByCoords(position.coords).then((cityName) =>
        props.updateCity(cityName)
      );
      //props.updateCity(city.current.value);
    });
  };
  return (
    <form className="row" onSubmit={submitHandler}>
      <div className="col-9">
        <input
          className="form-control col-1"
          placeholder="Enter a city name ..."
          ref={city}
        />
      </div>
      <button
        type="submit"
        title="Search"
        className=" btn btn-primary col-1 px-1 mx-1"
      >
        OK
      </button>
      <button
        title="Your current location"
        onClick={currLocationHandler}
        className="btn btn-primary col-1 px-1 mx-1"
      >
        <FontAwesomeIcon icon={faMapPin} className={classes.location} />
      </button>
    </form>
  );
};

export default Search;
