import { Visibility, Weather } from "./enums";
import { NewDiaryEntry } from "./types";

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error("Incorrect or missing comment");
  }
  return commentFromRequest;
};

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date");
  }
  return dateFromRequest;
};

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error("Incorrect or missin Weather");
  }
  return weatherFromRequest;
};

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error("Incorrect or missin visibility");
  }
  return visibilityFromRequest;
};

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param);
};

//lo que hacemos aca ingresa cualquier cosa "any" y verificamos que corresponda al weather
const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param);
};

const isString = (string: string): boolean => {
  return typeof string === "string";
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

//recibe un objeto any porque no se sabe lo que el cliente puede colocar
//pero si o si lo que devuelve tiene que ser de tipo NewDiaryEntry
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  };
  return newEntry;
};
export default toNewDiaryEntry;
