// Тренажёр M05 — «Порядок событий». Задание и правила — в index.html.
//
// Стенд: #outer > #middle > #inner > #link. Перед каждым сценарием
// разметка собирается заново, поэтому обработчики прошлого сценария
// исчезают вместе со старыми узлами.
//
// on(selector, opts)  — вешает обработчик клика, который пишет в trace,
//                       когда сработал. opts: { capture, stop,
//                       stopImmediate, prevent, name }.
// click(selector)     — отправляет клик и возвращает судьбу действия
//                       по умолчанию.
// report(n, fate)     — печатает строку сценария в консоль.

const TEMPLATE = `
  <div id="outer">outer
    <div id="middle">middle
      <div id="inner">inner
        <a id="link" href="#hit">ссылка</a>
      </div>
    </div>
  </div>`;

let trace = [];

function reset() {
  document.querySelector("#stage").innerHTML = TEMPLATE;
  trace = [];
}

function on(selector, opts = {}) {
  const label = opts.name || (opts.capture ? `${selector} (capture)` : selector);
  document.querySelector(selector).addEventListener(
    "click",
    (event) => {
      trace.push(label);
      if (opts.stop) {
        event.stopPropagation();
      }
      if (opts.stopImmediate) {
        event.stopImmediatePropagation();
      }
      if (opts.prevent) {
        event.preventDefault();
      }
    },
    { capture: Boolean(opts.capture) }
  );
}

function click(selector) {
  const event = new MouseEvent("click", { bubbles: true, cancelable: true });
  const allowed = document.querySelector(selector).dispatchEvent(event);
  return allowed ? "default: не отменён" : "default: отменён";
}

function report(n, fate) {
  console.log(`${n}.`, trace.join(" → ") || "(ничего)", "|", fate);
}

// 1. ожидаемый порядок: inner, middle, outer
reset();
on("#outer");
on("#middle");
on("#inner");
report(1, click("#inner"));

// 2. ожидаемый порядок: outer, middle, inner
//правильный порядок: outer, inner, middle
// Объяснение: capture-фаза проходит от внешнего элемента к цели,
// а bubbling-фаза начинается с цели и идёт наружу.
// Поэтому #outer (capture) срабатывает до #inner,
// а #middle — после #inner при всплытии.
reset();
on("#outer", { capture: true });
on("#middle");
on("#inner");
report(2, click("#inner"));

// 3. ожидаемый порядок: inner, middle, outer
//правильный порядок: outer(capture), middle(capture), inner(capture)
// Объяснение: все три обработчика работают в capture-фазе.
// В capture событие распространяется от внешнего элемента к цели.
reset();
on("#outer", { capture: true });
on("#middle", { capture: true });
on("#inner", { capture: true });
report(3, click("#inner"));

// 4. ожидаемый порядок: inner, middle
reset();
on("#outer");
on("#middle", { stop: true });
on("#inner");
report(4, click("#inner"));

// 5. ожидаемый порядок: inner, middle
//правильный порядок:middle(capture)
// Объяснение: #middle обрабатывает событие в capture-фазе
// до достижения #inner и вызывает stopPropagation().
// Поэтому событие не доходит до #inner и дальше не всплывает.
reset();
on("#outer");
on("#middle", { capture: true, stop: true });
on("#inner");
report(5, click("#inner"));

// 6. ожидаемый порядок: outer, inner, inner
//правильный порядок: inner(первый)
// Объяснение: stopImmediatePropagation() останавливает не только
// дальнейшее распространение события, но и другие обработчики
// на том же элементе. Поэтому #inner (второй) и #outer не срабатывают.
reset();
on("#inner", { name: "#inner (первый)", stopImmediate: true });
on("#inner", { name: "#inner (второй)" });
on("#outer");
report(6, click("#inner"));

// 7. ожидаемый порядок: outer.
reset();
on("#outer");
on("#middle");
on("#inner");
report(7, click("#outer"));

// 8. ожидаемый порядок:  inner, outer, inner
//правильный порядок: inner, outer
// Объяснение: обработчик #inner срабатывает один раз,
// когда событие всплывает от #link к #inner.
// Затем событие продолжает всплывать к #outer.
// Обработчик не запускается повторно на #inner.
reset();
on("#inner");
on("#outer");
report(8, click("#link"));

// 9. ожидаемый порядок: outer, inner
//правильный порядок: inner, outer
// Объяснение: при обычном bubbling событие идёт от #link
// к #inner, затем к #outer. preventDefault() отменяет
// действие по умолчанию ссылки, но не останавливает всплытие.
reset();
on("#inner", { prevent: true });
on("#outer");
report(9, click("#link"));

// 10. ожидаемый порядок: link, inner
//правильный порядок: link
// Объяснение: обработчик #link вызывает stopPropagation(),
// поэтому событие не распространяется дальше к #inner и #outer.
// Действие по умолчанию при этом не отменяется,
// потому что preventDefault() не вызывается.
reset();
on("#link", { stop: true });
on("#inner");
on("#outer");
report(10, click("#link"));
