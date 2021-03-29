import { Component, Input } from '@angular/core';
import { Weather, WeatherInfo } from '../shared/types/weather';

@Component({
	selector: 'app-weathers',
	templateUrl: './weathers.component.html',
	styleUrls: ['./weathers.component.scss']
})
export class WeathersComponent {
	@Input() darkMode!: boolean;
	weatherInfo: WeatherInfo = {
		weather: Weather.Clouds,
		currentTemp: '22',
		minTemp: '8',
		maxTemp: '25'
	};
	city = 'BEIJING';
	Weather = Weather;
}
