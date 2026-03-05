import { useState, useEffect } from "react";

function Weather() {
  const [city, setCity] = useState("Mumbai");
  const [inputCity, setInputCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "64208a56e4c44c1faeeb86ed917a239c";

  useEffect(() => {
    if (!city) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`,
          { signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setWeather(data.data[0]);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [city]); // refetch whenever city changes

  const handleSearch = () => {
    if (inputCity.trim() !== "") {
      setCity(inputCity);
      setInputCity("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Weather Dashboard</h2>

      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter city name"
      /> &nbsp; &nbsp;
      <button onClick={handleSearch}>Get Weather</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && !loading && (
        <div>
          <h3>{weather.city_name}</h3>
          <p>Temperature: {weather.temp} °C</p>
          <p>Weather: {weather.weather.description}</p>
          <p>Humidity: {weather.rh}%</p>
          <p>Wind Speed: {weather.wind_spd} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;