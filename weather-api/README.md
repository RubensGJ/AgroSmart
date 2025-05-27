# Weather API

This project is a simple weather API built using Node.js, Express, and Axios, which interacts with the OpenWeatherMap API to provide weather data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd weather-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   ```

## Usage

To start the server, run the following command:
```
npm start
```

The server will run on `http://localhost:3000`.

## API Endpoints

- **Get Current Weather**
  - **Endpoint:** `/api/weather`
  - **Method:** `GET`
  - **Query Parameters:**
    - `city`: Name of the city (e.g., `city=London`)
    - `lat`: Latitude of the location (optional)
    - `lon`: Longitude of the location (optional)

- **Get Weather by Coordinates**
  - **Endpoint:** `/api/weather/coords`
  - **Method:** `GET`
  - **Query Parameters:**
    - `lat`: Latitude of the location
    - `lon`: Longitude of the location

- **Search Cities**
  - **Endpoint:** `/api/weather/search`
  - **Method:** `GET`
  - **Query Parameters:**
    - `query`: Search term for city names

## License

This project is licensed under the MIT License.