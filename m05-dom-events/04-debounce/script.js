const input = document.querySelector('input');
const debounceCount = document.querySelector('#debounce-count');
const throttleCount = document.querySelector('#throttle-count');

// поиск по каталогу — не выполнять поиск после каждого символа,
// а подождать, пока пользователь закончит ввод.
function debounce(fn, ms){
    let timer
    return function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn()
        }, ms)
    }
}

// обработка scroll или движения мыши,
// всплытие какого-то баннера.
function throttle(fn, ms){
    let lastTime
    return function(){
        const now = Date.now()
        if(lastTime === undefined){
            fn();
            lastTime = now
        }
        else if(now - lastTime >= ms){
            fn();
            lastTime = now;
        }
    }
}

let debounceCalls= 0
let throttleCalls = 0

const debouncedHandler = debounce(function(){
    debounceCalls += 1
    debounceCount.textContent = debounceCalls
}, 500)
const throttledHandler = throttle(function(){
    throttleCalls += 1
    throttleCount.textContent = throttleCalls
},500)

input.addEventListener('input', debouncedHandler)
input.addEventListener('input', throttledHandler)