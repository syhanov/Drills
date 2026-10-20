// Стенд: показывает записи и печатает значения. Сортировки здесь нет.
document.querySelector("#input").textContent = JSON.stringify(RECORDS, null, 2);
const output = document.querySelector("#output");
let hasOutput = false;

function report(label, value) {
  const text = `${label}: ${JSON.stringify(value, null, 2)}`;
  output.textContent = hasOutput ? `${output.textContent}\n\n${text}` : text;
  hasOutput = true;
  console.log(text);
}

console.log("Записи загружены. Сортировка ещё не написана.");

// Твоя работа ниже: объявление sortRecords(records, mode).
// Вызови его с RECORDS для score, name, date, затем original.
// Сохрани JSON.stringify(RECORDS) до вызовов и сравни после.
// Проверь [] во всех режимах. Через report выведи реальные id результатов.

function sortRecords(records, mode) {
  if(mode === "score"){
    let scoreFiltered = [...records].sort(function(a,b) {
      return b.score - a.score || a.id - b.id
    })
  return scoreFiltered
  }
  if(mode === "name"){
    let nameFiltered = [...records].sort(function(a,b) {
      return a.name.localeCompare(b.name, 'en') || a.id - b.id
    })
  return nameFiltered
  }
  if(mode === "date"){
    let dateFiltered = [...records].sort(function(a,b) {
        if (a.date === null) return 1;
        if (b.date === null) return -1;
      return b.date.localeCompare(a.date) || a.id - b.id
    })
  return dateFiltered
  }
  if(mode === 'original'){
    return [...RECORDS]
  }
}

report('Отсортированные данные', sortRecords(RECORDS, "original"))