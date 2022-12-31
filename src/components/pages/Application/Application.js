import './application.scss';
import ThisDayWeather from '../../ThisDayWeather';
import ThisDayWeatherInfo from '../../ThisDayWeatherInfo';
import SomeDaysWeather from '../../SomeDaysWeather';
import Filters from '../../Filters';
import { useState, useEffect } from 'react';
import WeatherService from '../../../services/WeatherService';


const Application = () => {
	const [weatherMain, setWeatherMain] = useState({});
	const [weatherConditions, setWeatherConditions] = useState({});
	const [daysFilter, setDaysFilter] = useState(3);
	const [someDaysWeather, setSomeDaysWeather] = useState([]);
	const weatherService = new WeatherService({});

	useEffect(() => {
		weatherService
			.getCurrentWeather('Erdemli')
			.then(response => {
				setWeatherMain(response.main);
				setWeatherConditions(response.conditions);
			});
	}, []);

	useEffect(() => {
		weatherService
			.getSeveralDaysWeather('Erdemli', 7)
			.then((response) => {
				setSomeDaysWeather(response);
			});
	}, [daysFilter]);

	return (
		<div className="application">
			<div className="application__wraper">
				<ThisDayWeather weatherMain={weatherMain} />
				<ThisDayWeatherInfo weatherConditions={weatherConditions} />
			</div>
			<Filters
				setDaysFilter={setDaysFilter} />
			<SomeDaysWeather
				someDaysWeather={someDaysWeather} />
		</div>
	);
};

export default Application;