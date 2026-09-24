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
  const query = event.target.value.trim().toLowerCase();
  const found = GAMES.filter((game) => game.name.toLowerCase().includes(query));
  list.innerHTML = renderList(found);
}

list.innerHTML = renderList(GAMES);

// Детали по кнопке «Подробнее».
list.addEventListener("click", (event) => {
  if (!event.target.classList.contains("item__more")) {
    return;
  }
  const item = event.target.closest(".item");
  const game = GAMES.find((game) => String(game.id) === item.dataset.id);
  item.querySelector(".item__details").innerHTML = renderDetails(game);
});

// Подсветка пункта под курсором.
list.addEventListener("mouseover", (event) => {
  const item = event.target.closest(".item");
  for (const other of list.querySelectorAll(".item")) {
    other.classList.remove("item--hover");
  }
  item.classList.add("item--hover");
});

// Escape очищает поиск.
list.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }
  input.value = "";
  list.innerHTML = renderList(GAMES);
});

// Живой поиск.
input.addEventListener("input", onInput());
