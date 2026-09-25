
const button = document.querySelector('#rerender')
const list = document.querySelector('.list')
const games = document.querySelectorAll('li');

for(let i = 0; i<games.length; i++){
    games[i].addEventListener('click', function(){
        games[i].classList.add('selected')
    })
}

button.addEventListener('click', function(){
    list.innerHTML = `
        <li>Игра 1</li>
        <li>Игра 2</li>
        <li>Игра 3</li>
    `
})

list.addEventListener('click', function(event){
    const game = event.target.closest('li')
    game.classList.add('selected')
    if(!card) return;

})