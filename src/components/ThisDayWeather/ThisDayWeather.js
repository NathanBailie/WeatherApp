import './thisDayWeather.scss';
import sunny from './Sunny.png';

const ThisDayWeather = () => {


	return (
		<div className="thisDay">
			<div className="thisDay__weather">
				<div className="thisDay__temperature">
					<span>
						20
						<sup>o</sup>
					</span>
					<h3>Сегодня</h3>
				</div>
				<div className="thisDay__image">
					<img src={sunny} alt="sunny" />
				</div>
			</div>
			<p>Время: 21:54</p>
			<p>Город: Санкт-Петербург</p>
		</div>
	);
};

export default ThisDayWeather;