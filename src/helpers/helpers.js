export const convertResponseDaily = (response) => {
  return response.map((day) => ({
    time: new Date(day.time * 1000).getHours(),
    day: new Date(day.time * 1000).getDay(),
    tempMax: day.temperature.maximum,
    tempMin: day.temperature.minimum,
    url: day.condition.icon_url,
    wind: day.wind.speed,
    condition: day.condition.description,
  }));
};
