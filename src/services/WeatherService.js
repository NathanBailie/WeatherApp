export default class WeatherService {
	_apiBase = 'http://api.weatherapi.com/v1';
	_apiKey = '392a38bc90774449b9294621223012';

	getResource = async (cityName) => {
		const res = await fetch(`${this._apiBase}/current.json?key=${this._apiKey}&q=${cityName}`);

		if (!res.ok) {
			throw new Error(`Could not fetch this url, received ${res.status}`);
		};

		return await res.json();
	};

	getResources = async (cityName, amountOfDays) => {
		const res = await fetch(`${this._apiBase}/forecast.json?key=${this._apiKey}&q=${cityName}&days=${amountOfDays}`);

		if (!res.ok) {
			throw new Error(`Could not fetch this url, received ${res.status}`);
		};

		return await res.json();
	};

	_transformData = (data) => {
		return {
			main: {
				city: data.location.name,
				country: data.location.country,
				time: data.current.last_updated,
				weatherText: data.current.condition.text,
				icon: data.current.condition.icon,
				temperature: data.current.temp_c,
			},
			conditions: {
				temperature: data.current.temp_c,
				feelsLike: data.current.feelslike_c,
				pressure: data.current.precip_mm,
				windSpeed: data.current.wind_kph,
				windDir: data.current.wind_dir,
				cloudCover: data.current.cloud,
				precipitation: data.current.precip_mm,
				humidity: data.current.humidity,
			},
		};
	};

	_transformDatas = (data) => {
		const result = data.forecast.forecastday.map(day => {
			return {
				date: day.date,
				maxTemp: day.day.maxtemp_c,
				minTemp: day.day.mintemp_c,
				weatherText: day.day.condition.text,
				icon: day.day.condition.icon
			};
		});
		return result;
	};

	getCurrentWeather = async (cityName) => {
		const res = await this.getResource(cityName);
		return this._transformData(res);
	};

	getSeveralDaysWeather = async (cityName, amountOfDays) => {
		const res = await this.getResources(cityName, amountOfDays);
		return this._transformDatas(res);
	};
};
