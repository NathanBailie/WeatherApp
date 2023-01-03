import './errorIndicator.scss';
import error from './error.png';

const ErrorIndicator = () => {
	return (
		<div className="errorIndicator">
			<img src={error} alt="error" />
			<h4>Ups.. Something has gone wrong!</h4>
			<p>Reload your page please and try again!</p>
		</div>
	);
};

export default ErrorIndicator;