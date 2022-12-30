import './thisDayWeather.scss';

const ThisDayWeather = ({ weatherMain }) => {
	if (Object.keys(weatherMain).length === 0) {
		return;
	};

	const { city, country, time, weatherText, icon, temperature } = weatherMain;
	const onlyTime = time.match(/\d+:\d+/)[0];
	const onlyDate = time.match(/\d+-\d+-\d+/)[0].split('-').join(', ');
	const date = new Date(onlyDate);
	const day = date.getDay();

	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	return (
		<div className="thisDay">
			<div className="thisDay__weather">
				<h3 className='thisDay__location'>
					{`${city} (${country})`}
				</h3>
				<h4 className='thisDay__date'>
					{`${days[day]}, ${date.getDate()}`}
				</h4>
				<img src={icon} alt="icon" />
				<p>{temperature}&deg;C,  {weatherText}</p>
				<span className="thisDay__time">Local time is {onlyTime}</span>
			</div>
		</div>
	);
};

export default ThisDayWeather;