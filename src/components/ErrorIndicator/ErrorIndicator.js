import './errorIndicator.scss';
import error from './error.png';


const ErrorIndicator = () => {
	return (
		<div className="errorIndicator">
			<img src={error} alt="error" />
			<h4>There is no weather forecast for your request!</h4>
			<p>Probably, you made a typo, reload the page and try again!</p>
		</div>
	);
};

export default ErrorIndicator;