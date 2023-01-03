import './application.scss';
import ThisDayWeather from '../ThisDayWeather';
import ThisDayWeatherInfo from '../ThisDayWeatherInfo';
import SeveralDaysWeather from '../SeveralDaysWeather';


const Application = ({ weatherMain, weatherConditions, weatherForecast }) => {
	return (
		<div className="application">
			<div className="application__wraper">
				<ThisDayWeather
					weatherMain={weatherMain}
				/>
				<ThisDayWeatherInfo
					weatherConditions={weatherConditions}
				/>
			</div>
			<SeveralDaysWeather
				weatherForecast={weatherForecast} />
		</div>
	);
};

export default Application;