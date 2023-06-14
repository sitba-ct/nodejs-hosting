import diaryData from "./diaries.json";
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from "./types";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];
// el la anterior sentencia typescript me tira error porque diaries es del typo "Array<DiaryEntry>" que yo defini.
// el archivo diaryData tiene otro type diferente que typescript lee automaticamente del json entonces tira error
// con el as le estoy diciendo a diaryData que este tranquilo que tambien es del typo  "Array<DiaryEntry>" que yo defini.

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  if (entry != null) {
    const { comment, ...restOfDiary } = entry;
    return restOfDiary;
  }
  return undefined;
};

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return { id, date, weather, visibility };
    });
  };
// supuestamente NonSensitiveInfoDiaryEntry en sus Type no tiene la informacion del "coment"
//typescript no lo detecta automaticamente entonces cuando haces el get se muestra toda la informacion inclusive el "coment"
// para sacarlo tenemos que filtrarlo manualmente con un map

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newDiaryEntry,
  };

  diaries.push(newDiary);
  return newDiary;
};
//se ven todos los que hay, se ve cual es el id mas alta y se le suma 1.
//De esta manera te aseguras si es que los id no son consecutivos.
