import './thisDayWeatherInfo.scss';
import temperature1 from '../../resources/icons/conditions/temperature.png';
import pressure1 from '../../resources/icons/conditions/pressure.png';
import humidity1 from '../../resources/icons/conditions/humidity.png';
import precipitation1 from '../../resources/icons/conditions/precipitation.png';
import windDir1 from '../../resources/icons/conditions/windDir.png';
import windSpeed1 from '../../resources/icons/conditions/windSpeed.png';
import cloudCover1 from '../../resources/icons/conditions/cloudCover.png';
// import '../../resources/img/bg/clouds.jpg';


const ThisDayWeatherInfo = ({ weatherConditions }) => {
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

	const conditions = [
		[temperature1, 'Temperature', temperature, '°C'],
		[pressure1, 'Pressure', pressure, 'mm'],
		[humidity1, 'Humidity', humidity, '%'],
		[precipitation1, 'Precipitation', precipitation, '%'],
		[windDir1, 'Wind direction', windDir],
		[windSpeed1, 'Wind speed', windSpeed, 'k/ph'],
		[cloudCover1, 'Cloud cover', cloudCover, '%'],
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