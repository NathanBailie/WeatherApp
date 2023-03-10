export default class FreeWeatherApiSerice {
	// ! FreeWeatherApi -  https://www.weatherapi.com/
	_apiBase = 'https://api.weatherapi.com/v1';
	_apiKey = '392a38bc90774449b9294621223012';

	getResource = async (cityName, lang) => {
		const res = await fetch(`${this._apiBase}/current.json?key=${this._apiKey}&q=${cityName}&lang=${lang}`);

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
				time: data.location.localtime,
				weatherText: data.current.condition.text,
				icon: data.current.condition.icon,
				temperature: data.current.temp_c,
			},
			conditions: {
				temperature: data.current.temp_c,
				pressure: data.current.precip_mm,
				windSpeed: data.current.wind_kph,
				windDir: data.current.wind_dir,
				cloudCover: data.current.cloud,
				precipitation: data.current.precip_mm,
				humidity: data.current.humidity,
			},
		};
	};

	getCurrentWeather = async (cityName, lang) => {
		const res = await this.getResource(cityName, lang);
		return this._transformData(res);
	};
};
