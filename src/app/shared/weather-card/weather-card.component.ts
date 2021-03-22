import { Component, Input } from '@angular/core';
import { Weather, WeatherInfo } from '../types/weather';

@Component({
	selector: 'app-weather-card',
	templateUrl: './weather-card.component.html',
	styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
	@Input() darkMode!: boolean;
	@Input() weatherInfo!: WeatherInfo;
	@Input() city!: string;

	Weather = Weather;
}
