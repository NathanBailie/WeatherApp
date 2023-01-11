import './main.scss';
import main1 from '../../resources/img/main/main1.jpg';
import main2 from '../../resources/img/main/main2.jpg';
import main3 from '../../resources/img/main/main3.jpg';
import main4 from '../../resources/img/main/main4.jpg';
import main5 from '../../resources/img/main/main5.jpg';
import main6 from '../../resources/img/main/main6.jpg';
import main7 from '../../resources/img/main/main7.jpg';
import main8 from '../../resources/img/main/main8.jpg';
import main9 from '../../resources/img/main/main9.webp';
import main10 from '../../resources/img/main/main10.webp';
import Spinner from '../Spinner';
import { useState, useEffect } from 'react';


const Main = ({ onGetWeather, mainLoading, forecastLoading, lang, setLang }) => {
	const images = [main1, main2, main3, main4, main5, main6, main7, main8, main9, main10];
	const [mainImage, setMainImage] = useState();
	const [value, setValue] = useState('');
	const [errMessage, setErrMessage] = useState(false);

	useEffect(() => {
		setMainImage(images[getRandom(0, images.length - 1)]);
	}, []);

	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	function onValidate(value) {
		if (value.length === 0) {
			setErrMessage(true);
		} else {
			setErrMessage(false);
			onGetWeather(value);
		};
	};

	let buttonClasses;
	if (!mainLoading || !forecastLoading) {
		buttonClasses = "main__button main__button_active";
	} else {
		buttonClasses = "main__button";
	};

	let errorMessageClasses;
	if (!errMessage) {
		errorMessageClasses = 'main__errorMessage';
	} else {
		errorMessageClasses = 'main__errorMessage main__errorMessage_active';
	};


	return (
		<div className="main">
			<img src={mainImage} alt="main" />
			<div className="main__finder">
				<input
					disabled={mainLoading || forecastLoading ? true : false}
					type="text"
					placeholder='type your city'
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onKeyDown={(e) => { e.key === 'Enter' && onGetWeather(value, lang) }} />
				<button
					className={buttonClasses}
					disabled={mainLoading || forecastLoading ? true : false}
					onClick={() => onValidate(value)}>
					{mainLoading ?
						<Spinner />
						:
						'Get Weather'
					}
				</button>
			</div>
			<p className={errorMessageClasses}>Please, type your city</p>
			<select
				className='main__select'
				onChange={(e) => setLang(e.target.value)}>
				<option>ru</option>
				<option>en</option>
			</select>
		</div>
	);
};

export default Main;