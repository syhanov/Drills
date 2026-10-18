// Стенд: показывает свежие данные и печатает значения. Опытов здесь нет.
document.querySelector("#input").textContent = JSON.stringify(createItems(), null, 2);
const output = document.querySelector("#output");
let hasOutput = false;

function report(label, value) {
  const text = `${label}: ${JSON.stringify(value, null, 2)}`;
  output.textContent = hasOutput ? `${output.textContent}\n\n${text}` : text;
  hasOutput = true;
  console.log(text);
}

console.log("Свежие данные показаны. Предсказания и опыты ещё не написаны.");

/*
Для каждой строки до запуска запиши, изменится ли source и что именно.
После запуска допиши наблюдение и объяснение, не стирая предсказание.

ссылка / сортировка:
ссылка / изменение name:
ссылка / добавление tags:

spread массива / сортировка:
spread массива / изменение name:
spread массива / добавление tags:

map поверхностных копий объектов / сортировка:
map поверхностных копий объектов / изменение name:
map поверхностных копий объектов / добавление tags:

Почему для одной сортировки достаточно копии массива:
*/

// Твоя работа ниже. Каждый опыт начни с нового source = createItems().
// Сохрани JSON.stringify(source) до операции; report делает снимок вывода,
// так что последующие изменения не перепишут уже напечатанные значения.
// После девяти опытов напиши sortedById(items) и покажи неизменность входа.

