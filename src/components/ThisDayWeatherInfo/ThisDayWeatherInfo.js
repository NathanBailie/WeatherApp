import './thisDayWeatherInfo.scss';
import temperatureIcon from '../../resources/icons/conditions/temperature.png';
import pressureIcon from '../../resources/icons/conditions/pressure.png';
import humidityIcon from '../../resources/icons/conditions/humidity.png';
import precipitationIcon from '../../resources/icons/conditions/precipitation.png';
import windDirIcon from '../../resources/icons/conditions/windDir.png';
import windSpeedIcon from '../../resources/icons/conditions/windSpeed.png';
import cloudCoverIcon from '../../resources/icons/conditions/cloudCover.png';


const ThisDayWeatherInfo = ({ weatherConditions, lang }) => {
	if (Object.keys(weatherConditions).length === 0) {
		return;
	};

	const {
		temperature,
		pressure,
		humidity,
		precipitation,
		windDir,
		windSpeed,
		cloudCover,
	} = weatherConditions;

	let condList;
	let measures;
	if (lang === 'ru') {
		condList = ['Температура', 'Давление', 'Влажность', 'Осадки', 'Направл. ветра', 'Скорость ветра', 'Облачность'];
		measures = ['мм', 'км/ч'];
	} else {
		condList = ['Temperature', 'Pressure', 'Humidity', 'Precipitation', 'Wind direction', 'Wind speed', 'Cloud cover'];
		measures = ['mm', 'k/ph'];
	};
	const conditions = [
		[temperatureIcon, condList[0], temperature, '°C'],
		[pressureIcon, condList[1], pressure, measures[0]],
		[humidityIcon, condList[2], humidity, '%'],
		[precipitationIcon, condList[3], precipitation, '%'],
		[windDirIcon, condList[4], windDir],
		[windSpeedIcon, condList[5], windSpeed, measures[1]],
		[cloudCoverIcon, condList[6], cloudCover, '%'],
	];

	const result = conditions.map((item, index) => {
		const [icon, description, value, magnitude] = item;
		return (
			<div
				className="thisDayWeatherInfo__item"
				key={index}
				title={description}>
				<div className="thisDayWeatherInfo__icon">
					<img src={icon} alt="weatherIcon" />
				</div>
				<span>{description}</span>
				<p>{value} {magnitude && magnitude}</p>
			</div>
		);
	});

	return (
		<div className="thisDayWeatherInfo">
			{result}
		</div>
	);
};

export default ThisDayWeatherInfo;