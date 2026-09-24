// Список игр: поиск, детали по кнопке, подсветка при наведении и Escape.
// Работает не так, как задумано, — разбирайся по консоли и отладчику.

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatYear(released) {
  return released.slice(0, 4);
}

function renderItem(game) {
  return `
    <li class="item" data-id="${game.id}">
      <span class="item__name">${escapeHtml(game.name)}</span>
      <span class="item__year">${escapeHtml(formatYear(game.released))}</span>
      <button class="item__more" type="button">
        <span class="item__more-text">Подробнее</span>
      </button>
      <div class="item__details"></div>
    </li>`;
}

function renderList(games) {
  if (games.length === 0) {
    return '<li class="list__empty">Ничего не найдено</li>';
  }
  return games.map(renderItem).join("");
}

function renderDetails(game) {
  return `
    <p>Жанры: ${escapeHtml(game.genres.join(", "))}</p>
    <p>Платформы: ${escapeHtml(game.platforms.join(", "))}</p>`;
}

const list = document.querySelector(".list");
const input = document.querySelector(".filter__input");


function onInput(event) {
  const query = input.value.toLowerCase().trim()
  const found = GAMES.filter((game) => game.name.toLowerCase().includes(query));
  list.innerHTML = renderList(found);
}

list.innerHTML = renderList(GAMES);

// Детали по кнопке «Подробнее».
 // Третья ошибка. Проверка через classList.contains() не учитывала,
 // что клик мог произойти по дочернему элементу кнопки.
 // event.target был .item__more-text, поэтому проверка возвращала false
 // и обработчик сразу завершался. Использовал closest(".item__more"),
 // чтобы найти кнопку при клике как по ней, так и по её дочерним элементам.
list.addEventListener("click", (event) => {
  if (!event.target.closest(".item__more")) {
    return;
  }
  const item = event.target.closest(".item");
  const game = GAMES.find((game) => String(game.id) === item.dataset.id);
  item.querySelector(".item__details").innerHTML = renderDetails(game);
});

// Вторая ошибка. Когда курсор попадал не на .item,
// closest() возвращал null, а код пытался добавить null.classList,
// из-за чего возникала ошибка.
// // Подсветка пункта под курсором.
list.addEventListener("mouseover", (event) => {
  const item = event.target.closest(".item");
  for (const other of list.querySelectorAll(".item")) {
    other.classList.remove("item--hover");
  }
  if(item !== null && item !== undefined){
    item.classList.add("item--hover");
  }
});

// Четвёртая ошибка. При проверке через Event Listener Breakpoint
// заметил, что обработчик события был установлен на list,
// поэтому при вводе текста в input он не срабатывал.
// Обработчик нужно было навесить непосредственно на input.
// Escape очищает поиск.
input.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }
  input.value = "";
  list.innerHTML = renderList(GAMES);
});

// Первая ошибка. onInput() сразу вызывает функцию,
// а нам нужно передать onInput как обработчик события input.
// Живой поиск.
input.addEventListener("input", onInput);
