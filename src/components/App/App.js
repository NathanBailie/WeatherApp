import 'normalize.css';
import './app.scss';
import Main from '../Main';
import Application from '../Application';
import ErrorIndicator from '../ErrorIndicator';
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
	const [lang, setLang] = useState('ru');

	useEffect(() => {
		if (mainLoading === false && forecastLoading === false) {
			setView(true);
		}
	}, [mainLoading, forecastLoading]);

	function onGetWeather(cityName, lang) {
		setMainLoading(true);
		setForecastLoading(true);

		setTimeout(() => {
			freeWeatherApiSerice
				.getCurrentWeather(cityName, lang)
				.then(response => {
					setWeatherMain(response.main);
					setWeatherConditions(response.conditions);
					setMainLoading(false);
				})
				.catch(() => { setError(true); setMainLoading(false) });
			setForecastLoading(false);
			openWeatherMapService
				.getWeatherForecast(cityName, lang)
				.then(response => {
					setweatherForecast(response);
					setForecastLoading(false);
				})
				.catch(() => { setForecastError(true); setForecastLoading(false) })
		}, 1000);
	};


	if (error || forecastError) {
		return <ErrorIndicator />
	};

	return (
		<div className="app">
			<div className="container">
				{/* <Main
					onGetWeather={onGetWeather}
					mainLoading={mainLoading}
					forecastLoading={forecastLoading}
					setLang={setLang}
				/> */}
				{!view ?
					<Main
						onGetWeather={onGetWeather}
						mainLoading={mainLoading}
						forecastLoading={forecastLoading}
						lang={lang}
						setLang={setLang}
					/>
					:
					<Application
						weatherMain={weatherMain}
						weatherConditions={weatherConditions}
						weatherForecast={weatherForecast}
						lang={lang}
					/>
				}
			</div>
		</div>
	);
};

export default App;