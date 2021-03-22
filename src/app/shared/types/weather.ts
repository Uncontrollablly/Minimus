export enum Weather {
	Sunny = 'Sunny',
	Clear = 'Clear',
	Clouds = 'Clouds',
	Rain = 'Rain',
	Drizzle = 'Drizzle',
	Mist = 'Mist',
	Haze = 'Haze',
	Fog = 'Fog',
	Storm = 'Storm',
	Thunderstorm = 'Thunderstorm'
}

export interface WeatherInfo {
	weather: Weather;
	currentTemp: string;
	minTemp: string;
	maxTemp: string;
}
