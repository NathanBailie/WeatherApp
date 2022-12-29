import './thisDayWeatherInfo.scss';
import cloud from './img/cloud.png';
import temperature from './icons/temperature.svg';
import pressure from './icons/pressure.svg';
import rainfall from './icons/rainfall.svg';
import wind from './icons/wind.svg';

const ThisDayWeatherInfo = () => {


	return (
		<div className="thisDayWeatherInfo">
			<div className="thisDayWeatherInfo__image">
				<img src={cloud} alt="cloud" />
			</div>
			<div className="thisDayWeatherInfo__item">
				<div className="thisDayWeatherInfo__icon">
					<img src={temperature} alt="temperature" />
				</div>
				<span>Температура</span>
				<p>
					20<sup>o</sup> - ощущается как 17<sup>o</sup>
				</p>
			</div>
			<div className="thisDayWeatherInfo__item">
				<div className="thisDayWeatherInfo__icon">
					<img src={pressure} alt="pressure" />
				</div>
				<span>Давление</span>
				<p>
					765 мм ртутного столба - нормальное
				</p>
			</div>
			<div className="thisDayWeatherInfo__item">
				<div className="thisDayWeatherInfo__icon">
					<img src={rainfall} alt="rainfall" />
				</div>
				<span>Осадки</span>
				<p>
					Без осадков
				</p>
			</div>
			<div className="thisDayWeatherInfo__item">
				<div className="thisDayWeatherInfo__icon">
					<img src={wind} alt="wind" />
				</div>
				<span>Ветер</span>
				<p>
					3 м/с юго-запад - легкий ветер
				</p>
			</div>
		</div>
	);
};

export default ThisDayWeatherInfo;