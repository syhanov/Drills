// Стенд: показывает данные и печатает значения. Расчёта заказов здесь нет.
document.querySelector("#input").textContent = JSON.stringify(ORDERS, null, 2);
const output = document.querySelector("#output");
let hasOutput = false;

function report(label, value) {
  const text = `${label}: ${JSON.stringify(value, null, 2)}`;
  output.textContent = hasOutput ? `${output.textContent}\n\n${text}` : text;
  hasOutput = true;
  console.log(text);
}

console.log("Данные заказов загружены. Расчёт ещё не написан.");

// Твоя работа ниже: объявления summarizeOrders(orders) и
// totalPaidWithLoop(orders), вызовы для ORDERS, [] и неоплаченных заказов.
// Сохрани JSON.stringify(ORDERS) до вызовов и сравни после.
// Печатай вычисленные значения через report, не готовые числа из условия.

