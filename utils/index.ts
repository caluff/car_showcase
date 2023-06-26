export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'abe4b345c0msh444aac2b4217bbbp1f6e4cjsn195fc49f1b11',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers: headers,
    });
  return await response.json();
}
