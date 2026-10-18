// Стенд: показывает записи и печатает значения. Обработки меток здесь нет.
document.querySelector("#input").textContent = JSON.stringify(RECORDS, null, 2);
const output = document.querySelector("#output");
let hasOutput = false;

function report(label, value) {
  const text = `${label}: ${JSON.stringify(value, null, 2)}`;
  output.textContent = hasOutput ? `${output.textContent}\n\n${text}` : text;
  hasOutput = true;
  console.log(text);
}

console.log("Записи загружены. Обработка меток ещё не написана.");

// Твоя работа ниже: объявление collectLabels(records) и вызовы для RECORDS
// и []. Сохрани JSON.stringify(RECORDS) до вызовов и сравни после.
// Печатай вычисленные значения через report, не массивы из условия.

