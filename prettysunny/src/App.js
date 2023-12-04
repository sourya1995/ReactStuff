import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputCity from './InputCity';
import ShowWeather from './ShowWeather';

function App() {
  const [inputCity, setInputCity] = useState("Seattle");
  const [cityName, setCityName] = useState("Seattle");
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false);

  const inputHandler = (e) => {
    setInputCity(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setError(false);
    setCityName(inputCity);
  }

  const URL = `whatever`

  async function fetchData(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    if (data.cod === "404") {
      setError(true);
    } else {
      setWeatherData(data);
    }

  }

  useEffect(() => {
    fetchData(URL);
  }, [URL]);


  return (
    <>
      <InputCity city={inputCity} onInputHandler={inputHandler} onSubmitHandler={submitHandler} />
      {error ? (
        <h3 className='error'> No data found! </h3>
      ) : (<ShowWeather data={weatherData} />)}

    </>
  );
}

export default App;
