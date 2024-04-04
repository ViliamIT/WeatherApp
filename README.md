# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Weather Dashboard

This Angular application provides a weather dashboard with features including a Heat Index Calculator and weather data visualization.

## Features

### Weather Data Table

- Displays weather data for London for the past 7 days and the next 4 days.
- Includes Date and Time, temperature (°C), Humidity (%), Precipitation, and surfacePressure (hPa) columns.

### Temperature Trend Graph

- Visualizes the temperature trend over time using a line chart.
- Displays the temperature variation for the past 7 days and the forecasted temperature for the next 4 days.

### Heat Index Calculator

- Allows users to calculate the Heat Index based on temperature and relative humidity.
- Input fields for entering temperature (in Celsius or Fahrenheit), temperature unit, and relative humidity.
- Validation to ensure that the Heat Index cannot be calculated for temperatures less than 26.7°C or 80°F.
- Display of the calculated Heat Index.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/your-username/weather-dashboard.git`
2. Navigate to the project directory using `cd weather-dashboard`
3. Install the necessary dependencies by running `npm install`
4. Start the development server by running `ng serve`
5. Open your web browser and visit `http://localhost:4200/` to view the application

## Usage

1. Use the Heat Index Calculator to calculate the perceived temperature based on actual temperature and humidity.
2. View the Weather Data Table to see historical and forecasted weather data for London.
3. Analyze the Temperature Trend Graph to understand temperature variations over time.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
