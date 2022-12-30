import './thisDayWeatherInfo.scss';
import cloud from '../../resources/img/cloud.png';
import temperature1 from '../../resources/icons/temperature.png';
import pressure1 from '../../resources/icons/pressure.png';
import humidity1 from '../../resources/icons/humidity.png';
import precipitation1 from '../../resources/icons/precipitation.png';
import windDir1 from '../../resources/icons/windDir.png';
import windSpeed1 from '../../resources/icons/windSpeed.png';
import cloudCover1 from '../../resources/icons/cloudCover.png';

const ThisDayWeatherInfo = ({ weatherConditions }) => {
	if (Object.keys(weatherConditions).length === 0) {
		return;
	};

	const {
		temperature,
		feelsLike,
		pressure,
		humidity,
		precipitation,
		windDir,
		windSpeed,
		cloudCover,
	} = weatherConditions;

	const conditions = [
		[temperature1, 'Temperature', temperature, feelsLike],
		[pressure1, 'Pressure', pressure],
		[humidity1, 'Humidity', humidity],
		[precipitation1, 'Precipitation', precipitation],
		[windDir1, 'Wind direction', windDir],
		[windSpeed1, 'Wind speed', windSpeed],
		[cloudCover1, 'Cloud cover', cloudCover],
	];

	const result = conditions.map((item, index) => {
		return (
			<>
				{/* <div className="thisDayWeatherInfo__image">
				<img src={cloud} alt="cloud" />
			</div> */}
				<div className="thisDayWeatherInfo__item">
					<div className="thisDayWeatherInfo__icon">
						<img src={item[0]} alt="weatherIcon" />
					</div>
					<span>{item[1]}</span>
					{item[1] === 'Temperature' ?
						<p>
							{item[2]}<sup>o</sup>, feels like {item[3]}<sup>o</sup>
						</p>
						:
						<p>{item[2]}</p>
					}
				</div>
			</>
		)
	})
	console.log(result)

	return (
		<div className="thisDayWeatherInfo">
			{result}
		</div>
	);
};

export default ThisDayWeatherInfo;