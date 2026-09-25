const games = [];

for(let i = 1; i <= 200; i++){
    let game = {
        name : 'Игра' + ' ' + i
    }
    games.push(game)
}


const list = document.querySelector('.list')

function renderGame(game){
    return `<li class='game'>
        <p class='game--title'>${game.name}</p>
    </li>`
}

const html = games
    .map(function(game){
        return renderGame(game)
})  .join('');

list.innerHTML = html


const search = document.querySelector('#filter')

search.addEventListener('input', function(){
    const found = games.filter(function(game) {
        return game.name.toLowerCase().includes(search.value.toLowerCase())
    })
    let renderedfound = 
    found
        .map(function(game){
            return renderGame(game)
        }) .join('')
    list.innerHTML = renderedfound
    const count = document.querySelector('#count')
    if(found.length !== 0){
        count.textContent = found.length    
    }
    else{
        count.textContent = `По запросу: ${search.value} ничего не найдено`
    }
})


