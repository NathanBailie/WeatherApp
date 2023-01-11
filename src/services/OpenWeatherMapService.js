export default class OpenWeatherMapService {
	// ! OpenWeatherMap - https://openweathermap.org/
	_apiBase = 'https://api.openweathermap.org/data/2.5';
	_apiKey = 'b218321600f23970f780231bf8e68548';

	getResource = async (cityName, lang) => {
		const res = await fetch(`${this._apiBase}/forecast?q=${cityName}&appid=${this._apiKey}&lang=${lang}`);

		if (!res.ok) {
			throw new Error(`Could not fetch this url, received ${res.status}`);
		};

		return await res.json();
	};

	_transformData = (weatherForecast) => {
		let set = new Set();
		weatherForecast.list.forEach(day => {
			set.add(day.dt_txt.match(/\d+-\d+-\d+/)[0])
		});

		let data = [];
		set.forEach(date => {
			data.push({
				date: date,
				temp_min: [],
				temp_max: [],
				pressure: [],
				weatherText: [],
				weatherDescr: [],
			});
		});

		data = data.map(item => {
			let newItem = { ...item };

			weatherForecast.list.forEach(day => {
				if (day.dt_txt.match(/\d+-\d+-\d+/)[0] === newItem.date) {
					newItem = {
						...newItem,
						['temp_min']: [...newItem['temp_min'], Math.round(Number(day.main.temp_min) - 273.15)],
						['temp_max']: [...newItem['temp_max'], Math.round(Number(day.main.temp_max) - 273.15)],
						['pressure']: [...newItem['pressure'], Math.round(Number(day.main.pressure) - 273.15)],
						['weatherText']: [...newItem['weatherText'], day.weather[0].main],
						['weatherDescr']: [...newItem['weatherDescr'], day.weather[0].description],
					};
				};
			});
			return newItem;
		});

		data = data.map(item => {
			const { temp_min, temp_max, pressure, weatherText, weatherDescr } = item;
			let newWeatherText = toFilter(weatherText);
			let newWeatherDescr = toFilter(weatherDescr);

			function toFilter(value) {
				let newValue;
				if ([...new Set(value)].length === 0) {
					newValue = [...new Set(value)][0]
				} else {
					let object = {};
					for (let text of [...new Set(value)]) {
						object[text] = 0;
					};
					value.forEach(text => {
						object[text] += 1;
					});
					newValue = Object.entries(object).reduce((acc, curr) => acc[1] > curr[1] ? acc : curr)[0];
				};
				return newValue;
			};

			return {
				...item,
				['temp_min']: Math.min(...temp_min),
				['temp_max']: Math.max(...temp_max),
				['pressure']: Math.round(pressure.reduce(function (sum, num) {
					return sum + num;
				}, 0) / pressure.length),
				['weatherText']: newWeatherText,
				['weatherDescr']: newWeatherDescr,
			};
		});

		return data;
	};

	getWeatherForecast = async (cityName, lang) => {
		const res = await this.getResource(cityName, lang);
		return this._transformData(res);
	};
};