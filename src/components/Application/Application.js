import './application.scss';
import ThisDayWeather from '../ThisDayWeather';
import ThisDayWeatherInfo from '../ThisDayWeatherInfo';
import SeveralDaysWeather from '../SeveralDaysWeather';


const Application = ({ weatherMain, weatherConditions, weatherForecast, lang }) => {
	return (
		<div className="application">
			<div className="application__wraper">
				<ThisDayWeather
					weatherMain={weatherMain}
					lang={lang}
				/>
				<ThisDayWeatherInfo
					weatherConditions={weatherConditions}
					lang={lang}
				/>
			</div>
			<SeveralDaysWeather
				weatherForecast={weatherForecast}
				lang={lang}
			/>
		</div>
	);
};

export default Application;