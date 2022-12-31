import './someDaysWeather.scss';

const SomeDaysWeather = () => {


	return (
		<div className="someDaysWeather">
			<div className="someDaysWeather__items">
				<div className="someDaysWeather__item">
					<h3>Сегодня</h3>
					<span>28 авг</span>
					{/* <img src={sun} alt="sun" /> */}
					<p>
						+18
						<sup>o</sup>
					</p>
					<span>
						+15
						<sup>o</sup>
					</span>
					<span className='someDaysWeather__descr'>Облачно</span>
				</div>
			</div>
		</div>
	);
};

export default SomeDaysWeather;