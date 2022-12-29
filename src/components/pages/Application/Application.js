import './application.scss';
import ThisDayWeather from '../../ThisDayWeather';


const Application = () => {


	return (
		<div className="application">
			<div className="application__wraper">
				<ThisDayWeather />
			</div>
		</div>
	);
};

export default Application;