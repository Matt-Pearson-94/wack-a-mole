let board = document.getElementById('board')
let gameOver = false;
let scoreText = document.querySelector('.score')
let score = 0
let mole = document.createElement('div')
let plant = document.createElement('div')
let both = ['mole', 'plant']
let end = document.querySelector('.gameover')

// Creates the board
for (let i = 0; i < 9; i++) {
    let div = document.createElement('div')
    div.id = i.toString()
    div.style.width = '180px'
    div.style.height = '180px'
    board.appendChild(div)
}

// setInterval(function placeMoles() {
//     if (document.querySelector('.mole') == null) {
//         let tile = document.getElementById(Math.floor(Math.random() * 9))
//         tile.appendChild(mole)
//         mole.classList.toggle('mole')
//     }
//     document.querySelector('.mole').classList.remove('mole')
//     let tile = document.getElementById(Math.floor(Math.random() * 9))
//     tile.appendChild(mole)
//     mole.classList.toggle('mole')
// }, 750)

setInterval(function placeBoth() {
    if (document.querySelector('.mole') == null || document.querySelector('.plant') == null) {
        let tile = document.getElementById(Math.floor(Math.random() * 9))
        tile.appendChild(mole)
        if (Math.random() * 10 > 8) {
            mole.classList.toggle(both[0])
            console.log(Math.random() * 10)
        } else { 
            mole.classList.toggle(both[1])
            console.log(Math.random() * 10)
        }
    }
    let tile = document.getElementById(Math.floor(Math.random() * 9))
    tile.appendChild(mole)
    if (Math.random() * 10 > 8) {
        mole.classList.toggle(both[0])
        console.log(Math.random() * 10)
    } else { 
        mole.classList.toggle(both[1])
        console.log(Math.random() * 10)
    }
}, 850)


// setInterval(function placePlants() {
//     if (document.querySelector('.plant') == null) {
//         let tile = document.getElementById(Math.floor(Math.random() * 9))
//         tile.appendChild(plant)
//         plant.classList.toggle('plant')
//     }
//     document.querySelector('.plant').classList.remove('plant')
//     let tile = document.getElementById(Math.floor(Math.random() * 9))
//     tile.appendChild(plant)
//     plant.classList.toggle('plant')
// }, 2000)

mole.addEventListener('click', event => {
    if (mole.className == 'mole') {
        score += 10
        scoreText.innerText = `Score: ${score}`
        mole.classList.toggle('mole')
    } else {
        gameOver = true;
        console.log('gameover')
        if (gameOver == true) {
            scoreText.textContent = `GAME OVER! YOUR SCORE: ${score}`
        }
    }
})


// document.querySelector('.plant').addEventListener('click', event => {
//     gameOver = true;
//     if (gameOver == true) {
//         scoreText.textContent = `GAME OVER! YOUR SCORE: ${score}`

//     }
// })

setInterval(function end() {
    gameOver = true;
    if (gameOver == true) {
        scoreText.textContent = `GAME OVER! YOUR SCORE: ${score}`
    }
}, 60000)
