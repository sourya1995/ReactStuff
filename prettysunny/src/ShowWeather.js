import { useEffect } from "react";
import { useState } from "react";

const ShowWeather = ({ data }) => {

    const [dynamicBackground, setDynamicBackground] = useState("");

    const dynamicBackgroundColor = (temp) => {
        if(temp < 10) {
            setDynamicBackground("#bbeafa");
        }

        if(temp > 10 && temp <= 30) {
            setDynamicBackground("#fcfa5b");
        }

        if(temp > 30) {
            setDynamicBackground("#ff512f");
        }
    }

    useEffect(() => {
        dynamicBackgroundColor(tempInCelcius);
    }, [tempInCelcius])

    const city = data.name;
    const country = data.sys ? data.sys.country : null;
    const temperature = data.main ? data.main.temp : null;
    const pressure = data.main ? data.main.pressure : null;
    const visibility =  data ? data.visibility : null;
    const humidity = data.main ? data.main.humidity : null;
    const clouds =  data.clouds ? data.clouds.all : null;

    const pressureInAtm = (pressure / 1000).toFixed(2);
    const tempInCelcius = (temperature / 10).toFixed(2);
    const visibilityInKM = (visibility / 1000).toFixed(2);
    return (
      <React.Fragment>
        <div className="showWeather">
          <div className="weather_main" style={{ background: dynamicBackground }}>
            <h1 className="weather_heading">
              {city} <br /> <span> {country}</span>
            </h1>
            <h3 className="temp">{temperature}</h3>
            <hr />
            <div className="weatherData">
              <p>
                Pressure <br /> {pressureInAtm}{" "}
              </p>
              <p>
                Visibility <br /> {visibilityInKM} Km
              </p>
            </div>
            <div className="weatherData">
              <p>
                Humidity: <br /> {humidity} %{" "}
              </p>
              <p>
                Clouds: <br /> {clouds} %{" "}
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };