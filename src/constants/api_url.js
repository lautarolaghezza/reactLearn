const location = "Buenos Aires,ar";

const api_key = "190e66b8ed846a42d42399e4941efd98";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`

