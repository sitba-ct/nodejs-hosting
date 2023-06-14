// tambien te podes crear tus propios tipos

//export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
//la anterior manera de definir los typos la cambiamos por la siguiente
//esto es para poder definir los types en el POST. ver archivo "utils" funcion "isWeather"
//Esto lo hacemos porque queremos utilizar estos valores en nuestro codigo
export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Windy = "windy",
  stormy = "stormy",
}

//export type Visibility = "great" | "good" | "ok" | "poor";
export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}
