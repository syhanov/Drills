//Beginner - Lost Without a Map, 8 kyu — новый массив с удвоенными числами через map.

function maps(x){
 return x.map(function(curentX) {
   return curentX * 2
 })
}

//List Filtering, 7 kyu — убери строки через filter; число 0 оставь, строку "0" — нет.
function filter_list(l) {
  return l.filter(function(curentL){
    return typeof curentL !== 'string'
  })
}

//Categorize New Member, 7 kyu — преобразуй пары «возраст, гандикап» в "Senior" или "Open" через map. Проверь границы: возраст ≥ 55 и гандикап > 7 для "Senior".
function openOrSenior(data){
  // ...
  return data.map(function(dataX) {
    let age = dataX[0]
    let handicap = dataX[1]
    if(age>= 55 && handicap > 7) {
      return "Senior"
    }
    else {
      return "Open"
    }
  })
}

//Sum of positive, 8 kyu — сложи только положительные числа через filter и reduce с начальным 0. Пустой массив и отсутствие положительных дают 0.
function positiveSum(arr) {
  let positiveArr = arr.filter(function(arrX) {
    return arrX > 0
  })
  return positiveArr.reduce(function(accum, number) {
    return accum + number
  }, 0)
}

//Sort Numbers, 7 kyu — числовая сортировка по возрастанию; для [] и null верни [].
function solution(nums){
  if(nums === null) {
    return []
  }
  return nums.sort(function(a,b){
    return a - b
  })
}

//Flatten and sort an array, 7 kyu — плоский массив из двумерного через flat, затем числовая сортировка. Проверь пустые вложенные массивы.
function flattenAndSort(array) {
  
  return array.flatMap(function(x) {
    return x
  }).sort(function(a,b) {
    return a - b
  });
}
