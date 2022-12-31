import './application.scss';
import ThisDayWeather from '../../ThisDayWeather';
import ThisDayWeatherInfo from '../../ThisDayWeatherInfo';
import SomeDaysWeather from '../../SomeDaysWeather';
import Filters from '../../Filters';
import { useEffect } from 'react';
import WeatherService from '../../../services/WeatherService';
import { useState } from 'react';


const Application = () => {
	const [weatherMain, setWeatherMain] = useState({});
	const [weatherConditions, setWeatherConditions] = useState({});
	const [daysFilter, setDaysFilter] = useState(3);

	const weatherService = new WeatherService({});

	useEffect(() => {
		weatherService
			.getCurrentWeather('Erdemli')
			.then(response => {
				setWeatherMain(response.main);
				setWeatherConditions(response.conditions)
			})
	}, []);

	return (
		<div className="application">
			<div className="application__wraper">
				<ThisDayWeather weatherMain={weatherMain} />
				<ThisDayWeatherInfo weatherConditions={weatherConditions} />
			</div>
			<Filters
				setDaysFilter={setDaysFilter} />
			<SomeDaysWeather />
		</div>
	);
};

export default Application;