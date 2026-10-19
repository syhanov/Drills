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

function summarizeOrders(orders) {
  let paidedArray = orders.filter(function(order) {
    return order.paid === true
  })
  let paidIds = paidedArray.map(function(order) {
    return order.id
  })
  let lineTotals = paidedArray.map(function(order) {
    return order.price * order.quantity
  })
  let total = lineTotals.reduce((accum, curent) => accum + curent,0)
  return {
    paidIds: paidIds.join(", "),
    lineTotals: lineTotals.join(", "),
    total
  }
}

report('Сводка заказов', totalPaidWithLoop(ORDERS))

function totalPaidWithLoop(orders) {
  let paidedArray = []
  for(let i = 0; i<orders.length; i++){
    if(orders[i].paid === true){
      paidedArray.push(orders[i])
    }
  }
  let paidIds = []
  for(let i = 0; i<paidedArray.length; i++){
    paidIds.push(paidedArray[i].id)
  }
  let lineTotals = []
  let total = 0
  for(let i = 0; i<paidedArray.length; i++){
    lineTotals.push(paidedArray[i].price * paidedArray[i].quantity)
  }
  for(let i = 0; i<lineTotals.length; i++){
    total += lineTotals[i]
  }
  return {
    paidIds: paidIds.join(", "),
    lineTotals: lineTotals.join(", "),
    total
  }
}