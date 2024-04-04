import { Injectable } from '@angular/core';
import { fetchWeatherApi } from 'openmeteo';
	
@Injectable({
    providedIn: 'root'
  })
  export class WeatherService {

  async getWeatherData(): Promise<any> {
    
    const params = {
        "latitude": 51.5085,
        "longitude": -0.1257,
        "current": ["temperature_2m", "relative_humidity_2m", "surface_pressure"],
        "hourly": ["temperature_2m", "relative_humidity_2m", "precipitation", "surface_pressure"],
        "past_days": 7,
        "forecast_days": 5
    };

const url = "https://api.open-meteo.com/v1/dwd-icon";
const responses = await fetchWeatherApi(url, params);

// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

const current = response.current()!;
const hourly = response.hourly()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	current: {
		time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
		temperature2m: current.variables(0)!.value(),
		relativeHumidity2m: current.variables(1)!.value(),
		surfacePressure: current.variables(2)!.value(),
	},
	hourly: {
		time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
			(t) => new Date((t + utcOffsetSeconds) * 1000)
		),
		temperature2m: hourly.variables(0)!.valuesArray()!,
		relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
		precipitation: hourly.variables(2)!.valuesArray()!,
		surfacePressure: hourly.variables(3)!.valuesArray()!,
	},

};


return weatherData;
}

  }