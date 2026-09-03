// Сборка каталога из массива GAMES.
// Работает не так, как задумано, — разбирайся по консоли и брейкпоинтам.

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatYear(released) {
  const year = released.split("-");
  return year[0]
}

function formatRating(rating) {
  return rating.toFixed(1);
}

function renderCard(game) {
  return `
    <li class="card">
      <img class="card__cover" src="${escapeHtml(game.background_image)}"
           alt="Обложка: ${escapeHtml(game.name)}" width="300" height="225">
      <h2 class="card__title">${escapeHtml(game.name)}</h2>
      <p class="card__meta">${escapeHtml(formatYear(game.released))} · ${escapeHtml(game.genres[0])}</p>
      <span class="card__rating">${formatRating(game.rating)}</span>
    </li>`;
}

function renderCatalog(games) {
  if (games.length === 0) {
    return '<li class="catalog-empty">Пока пусто</li>';
  }
  return games.map(renderCard).join("");
}

const container = document.querySelector(".catalog");
container.innerHTML = renderCatalog(GAMES);
