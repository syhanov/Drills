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

