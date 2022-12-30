import './application.scss';
import ThisDayWeather from '../../ThisDayWeather';
import ThisDayWeatherInfo from '../../ThisDayWeatherInfo';
import SomeDaysWeather from '../../SomeDaysWeather';
import { useEffect } from 'react';
import WeatherService from '../../../services/WeatherService';
import { useState } from 'react';


const Application = () => {
	const [weatherMain, setWeatherMain] = useState({});
	const weatherService = new WeatherService({});
	useEffect(() => {
		weatherService
			.getCurrentWeather('Erdemli')
			.then(response => {
				setWeatherMain(response.main)
			})
	}, []);

	return (
		<div className="application">
			<div className="application__wraper">
				<ThisDayWeather weatherMain={weatherMain} />
				<ThisDayWeatherInfo />
			</div>
			<SomeDaysWeather />
		</div>
	);
};

export default Application;