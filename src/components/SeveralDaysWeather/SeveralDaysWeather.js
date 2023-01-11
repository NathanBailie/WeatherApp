import './severalDaysWeather.scss';
import clear from '../../resources/icons/weather/clear.png';
import clouds from '../../resources/icons/weather/clouds.png';
import thunderstorm from '../../resources/icons/weather/thunderstorm.png';
import rain from '../../resources/icons/weather/rain.png';
import snow from '../../resources/icons/weather/snow.png';
import mist from '../../resources/icons/weather/mist.png';

const SeveralDaysWeather = ({ weatherForecast, lang }) => {
	if (weatherForecast.length === 0 || weatherForecast.length === undefined) {
		return;
	};

	const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let daysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	let monthsRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь'];

	const result = weatherForecast.map((day, index) => {
		const { date, temp_min, temp_max, pressure, weatherText, weatherDescr } = day;
		const dateArray = date.split('-');
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
		let monthsName = lang === 'ru' ? monthsRu[monthNum] : monthsEn[monthNum];
		let dayName = lang === 'ru' ? daysRu[dayOfWeek] : daysEn[dayOfWeek];

		return (
			<div className="severalDaysWeather__item" key={index}>
				<h2>{`${monthsName}, ${dayNum}`}</h2>
				<h3>{dayName}</h3>
				<span>
					{temp_min}<sup>o</sup> / {temp_max}<sup>o</sup>

				</span>
				<img src={icons[weatherText] !== undefined ? icons[weatherText] : icons[mist]} alt="weatherIcon" />
				<p className="severalDaysWeather__text">{weatherDescr.slice(0, 1).toUpperCase() + weatherDescr.slice(1)}</p>
				<p className="severalDaysWeather__pressure">{pressure} {lang === 'ru' ? 'мм' : 'mm'}</p>
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