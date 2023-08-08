let board = document.getElementById('board')
let gameOver = false;
let scoreText = document.querySelector('h2')
let score = 0

// Creates the board
for (let i = 0; i < 9; i++) {
    let div = document.createElement('div')
    div.id = i.toString()
    div.style.width = '180px'
    div.style.height = '180px'
    board.appendChild(div)
}


setInterval(function placeMoles() {
    let mole = document.createElement('div')
    document.querySelector('.mole').classList.remove('mole')
    let tile = document.getElementById(Math.floor(Math.random() * 9))
    tile.appendChild(mole)
    mole.classList.toggle('mole')
}, 1000)


// setInterval(function clearMoles() {
//     let mole = document.querySelector('.mole')
//     mole.classList.toggle('mole')
// }, 900) //800

document.querySelector('.mole').addEventListener('onclick', event => {
        console.log('yes')
        score += 10
        scoreText.innerText = score
})

