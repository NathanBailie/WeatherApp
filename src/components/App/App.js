import 'normalize.css';
import './app.scss';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import Main from '../Main';
import Application from '../Application';
import { useState, useEffect } from 'react';
import FreeWeatherApiSerice from '../../services/FreeWeatherApiSerice';
import OpenWeatherMapService from '../../services/OpenWeatherMapService';


const App = () => {
	const [view, setView] = useState(false);
	const freeWeatherApiSerice = new FreeWeatherApiSerice();
	const openWeatherMapService = new OpenWeatherMapService();

	const [weatherMain, setWeatherMain] = useState({});
	const [weatherConditions, setWeatherConditions] = useState({});
	const [mainLoading, setMainLoading] = useState(null);
	const [error, setError] = useState(false);

	const [weatherForecast, setweatherForecast] = useState({});
	const [forecastLoading, setForecastLoading] = useState(null);
	const [forecastError, setForecastError] = useState(false);

	useEffect(() => {
		if (mainLoading === false && forecastLoading === false) {
			setView(true);
		}
	}, [mainLoading, forecastLoading]);

	function onGetWeather(cityName) {
		setMainLoading(true);
		setForecastLoading(true);
		console.log(123)

		setTimeout(() => {
			freeWeatherApiSerice
				.getCurrentWeather(cityName)
				.then(response => {
					setWeatherMain(response.main);
					setWeatherConditions(response.conditions);
					setMainLoading(false);
				})
				.catch(() => { setError(true); setMainLoading(false) })

			openWeatherMapService
				.getWeatherForecast(cityName)
				.then(response => {
					setweatherForecast(response);
					setForecastLoading(false);
				})
				.catch(() => { setForecastError(true); setForecastLoading(false) })
		}, 1000);
	}

	if (error) {
		return <ErrorIndicator />
	};

	return (
		<div className="app">
			<div className="container">
				{!view ?
					<Main
						onGetWeather={onGetWeather}
						mainLoading={mainLoading}
						forecastLoading={forecastLoading}
					/>
					:
					<Application
						weatherMain={weatherMain}
						weatherConditions={weatherConditions}
						weatherForecast={weatherForecast} />
				}
			</div>
		</div>
	);
};

export default App;