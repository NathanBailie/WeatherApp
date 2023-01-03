import './main.scss';
import main from '../../resources/img/main.jpg';
import { useState } from 'react';
import Spinner from '../Spinner';

const Main = ({ onGetWeather, mainLoading, forecastLoading }) => {
	const [value, setValue] = useState('');

	return (
		<div className="main">
			<img src={main} alt="main" />
			<div className="main__finder">
				<input
					type="text"
					placeholder='type your city'
					value={value}
					onChange={(e) => setValue(e.target.value)} />
				<button disabled={mainLoading || forecastLoading ? true : false}
					onClick={() => { onGetWeather(value) }}
				>
					{mainLoading ? <Spinner /> : 'Get Weather'}
				</button>
			</div>
		</div>
	);
};

export default Main;