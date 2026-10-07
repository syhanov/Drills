const games = [];

for(let i = 1; i <= 200; i++){
    let game = {
        name: 'Игра ' + i
    }

    games.push(game)
}


const list = document.querySelector('.list')
const count = document.querySelector('#count')
const search = document.querySelector('#filter')
const addButton = document.querySelector('#add')
const removeButton = document.querySelector('#remove')


function renderGame(game){
    return `<li class='game'>
        <p class='game--title'>${game.name}</p>
    </li>`
}

function renderGames(){
    const found = games.filter(function(game) {
        return game.name
            .toLowerCase()
            .includes(search.value.toLowerCase())
    })
    const html = found
        .map(function(game){
            return renderGame(game)
        })
        .join('')

    list.innerHTML = html

    if(found.length !== 0){
        count.textContent = found.length
    }
    else{
        count.textContent = `По запросу: ${search.value} ничего не найдено`
    }
}
renderGames()
search.addEventListener('input', function(){
    renderGames()
})
addButton.addEventListener('click', function(){
    let game = {
        name: 'Игра ' + (games.length + 1)
    }
    games.push(game)
    renderGames()
})


removeButton.addEventListener('click', function(){
    if(games.length === 0){
        return
    }
    games.pop()
    renderGames()
})