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

copy = source — ссылка на один массив. Нет новой копии ни массива, ни объектов.
ссылка / сортировка: измениться оригинальный массив
ссылка / изменение name:  измениться оригинальный массив
ссылка / добавление tags: измениться оригинальный массив

copy = [...source] — поверхностная копия массива. Массив новый, объекты внутри общие.
spread массива / сортировка: копия отсортируеться
spread массива / изменение name: измениться оригинальный массив
spread массива / добавление tags: измениться оригинальный массив

copy = source.map(item => ({ ...item })) — поверхностные копии объектов. массив новый, объекты новые, вложенные массивы общие.
map поверхностных копий объектов / сортировка: копия отсортируеться
map поверхностных копий объектов / изменение name: копия отсортируеться
map поверхностных копий объектов / добавление tags: копия отсортируеться / изменился оригинал

Почему для одной сортировки достаточно копии массива: потому что меняеться только индекс элементов внутри массива сами элементы не изменны
*/ 

// Твоя работа ниже. Каждый опыт начни с нового source = createItems().
// Сохрани JSON.stringify(source) до операции; report делает снимок вывода,
// так что последующие изменения не перепишут уже напечатанные значения.
// После девяти опытов напиши sortedById(items) и покажи неизменность входа.


source = createItems()
let before = JSON.stringify(source);
let copy = source
copy.sort(function(a,b) {
  return a.id - b.id;
})
copy[0].name = "Changed"
copy[0].tags.push("new")
report("source до операции", JSON.parse(before));
report("source после операции", source);


source = createItems();
before = JSON.stringify(source)
let copySpread = [...source]
copySpread.sort(function(a,b) {
  return a.id - b.id;
})
copySpread[0].name = "Changed"
copySpread[0].tags.push("new")
report("source до операции", JSON.parse(before));
report("source после операции", source);


source = createItems();
before = JSON.stringify(source)
let copyMap = source.map(item => ({ ...item }));
copyMap.sort(function(a,b) {
  return a.id - b.id;
})
copyMap[0].name = "Changed"
copyMap[0].tags.push("new")
report("source до операции", JSON.parse(before));
report("source после операции", source);