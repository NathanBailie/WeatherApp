import './application.scss';
import ThisDayWeather from '../../ThisDayWeather';
import ThisDayWeatherInfo from '../../ThisDayWeatherInfo';
import SomeDaysWeather from '../../SomeDaysWeather';


const Application = () => {


	return (
		<div className="application">
			<div className="application__wraper">
				<ThisDayWeather />
				<ThisDayWeatherInfo />
			</div>
			<SomeDaysWeather />
		</div>
	);
};

export default Application;