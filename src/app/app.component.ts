import { Component } from '@angular/core';
import { Weather, WeatherInfo } from './shared/types/weather';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Minimus';
	showSidebar = false;
	darkMode = false;
	weatherInfo: WeatherInfo = {
		weather: Weather.Clouds,
		currentTemp: '22',
		minTemp: '8',
		maxTemp: '25'
	};
}
