// Тренажёр M04 — «Предскажи результат». Задание и правила — в index.html.
// Первый аргумент show — номер выражения, по нему сверяешь консоль.
// show печатает строки в кавычках: console.log выводит их без кавычек,
// и '52' в консоли не отличить от 52.
function show(n, value) {
  console.log(n, typeof value === 'string' ? `'${value}'` : value);
}

// 1. предсказание: object
show(1, typeof null);

// 2. предсказание: undifiend
show(2, typeof NaN);

// 3. предсказание: undifiend
show(3, typeof []);

// 4. предсказание: Undifiend
show(4, typeof missingVariable);

// 5. предсказание: true
show(5, '5' == 5);

// 6. предсказание: false
show(6, '5' === 5);

// 7. предсказание: true
show(7, null == undefined);

// 8. предсказание: false
show(8, null === undefined);

// 9. предсказание: true
show(9, null == 0);

// 10. предсказание: true
show(10, null >= 0);

// 11. предсказание: true
show(11, NaN === NaN);

// 12. предсказание: 0,333333333
show(12, 0.1 + 0.2);

// 13. предсказание: false
show(13, 0.1 + 0.2 === 0.3);

// 14. предсказание: 12
show(14, Number('12px'));

// 15. предсказание: Nan
show(15, parseInt('12px'));

// 16. предсказание: 52
show(16, '5' + 2);

// 17. предсказание: 3
show(17, '5' - 2);

// 18. предсказание: 33
show(18, 1 + 2 + '3');

// 19. предсказание: Год: Undifiend
show(19, `Год: ${undefined}`);

// 20. предсказание: 1, 9 , 10
show(20, [10, 9, 1].sort());
