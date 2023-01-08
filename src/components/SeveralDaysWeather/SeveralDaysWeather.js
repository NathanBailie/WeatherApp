import './severalDaysWeather.scss';
import clear from '../../resources/icons/weather/clear.png';
import clouds from '../../resources/icons/weather/clouds.png';
import thunderstorm from '../../resources/icons/weather/thunderstorm.png';
import rain from '../../resources/icons/weather/rain.png';
import snow from '../../resources/icons/weather/snow.png';
import mist from '../../resources/icons/weather/mist.png';

const SeveralDaysWeather = ({ weatherForecast }) => {
	if (weatherForecast.length === 0 || weatherForecast.length === undefined) {
		return;
	};

	const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const result = weatherForecast.map((day, index) => {
		const { date, temp_min, temp_max, pressure, weatherText } = day;
		const dateArray = date.split('-');
		const newDate = new Date(...dateArray);
		const monthNum = Number(dateArray[1]) - 1;
		const dayNum = Number(dateArray[2]);
		const dayOfWeek = new Date(...dateArray).getDay();
		const icons = {
			Clear: clear,
			Clouds: clouds,
			Rain: rain,
			Thunderstorm: thunderstorm,
			Snow: snow,
			Mist: mist,
		};

		return (
			<div className="severalDaysWeather__item" key={index}>
				<h2>{`${monthsEn[monthNum]}, ${dayNum}`}</h2>
				<h3>{daysEn[dayOfWeek]}</h3>
				<span>
					{temp_min}<sup>o</sup> / {temp_max}<sup>o</sup>

				</span>
				<img src={icons[weatherText] !== undefined ? icons[weatherText] : icons[mist]} alt="weatherIcon" />
				<p className="severalDaysWeather__text">{weatherText}</p>
				<p className="severalDaysWeather__pressure">{pressure} mm</p>
			</div>
		);
	});

	return (
		<div className="severalDaysWeather">
			{result}
		</div>
	);
};

export default SeveralDaysWeather;