import './someDaysWeather.scss';

const SomeDaysWeather = ({ someDaysWeather }) => {
	if (someDaysWeather.length === 0) {
		return;
	};

	const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const result = someDaysWeather.map((day, index) => {
		const { date, maxTemp, minTemp, weatherText, icon } = day;
		const dateArray = date.split('-');
		const monthNum = Number(dateArray[1]) - 1;
		const dayNum = Number(dateArray[2]);

		return (
			<div className="someDaysWeather__item" key={index}>
				<h3>{`${monthsEn[monthNum]}, ${dayNum}`}</h3>
				<p>{maxTemp}<sup>o</sup></p>
				<span>{minTemp}<sup>o</sup></span>
				<img src={icon} alt="weatherIcon" />
				<span className='someDaysWeather__descr'>{weatherText}</span>
			</div>
		);
	});

	return (
		<div className="someDaysWeather">
			{result}
		</div>
	);
};

export default SomeDaysWeather;