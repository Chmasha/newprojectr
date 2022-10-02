import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiKey = "bab9bfb55a175358d00cbd1bf54c2461";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
  return (
    <Loader
      type="Puff"
      colloz="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
