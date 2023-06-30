


const letters = {
    "a": [1, 0, 0, 0, 0, 0],
    "b": [1, 0, 1, 0, 0, 0],
    "c": [1, 1, 0, 0, 0, 0],
    "d": [1, 1, 0, 1, 0, 0],
    "e": [1, 0, 0, 1, 0, 0],
    "f": [1, 1, 1, 0, 0, 0],
    "g": [1, 1, 1, 1, 0, 0],
    "h": [1, 0, 1, 1, 0, 0],
    "i": [0, 1, 1, 0, 0, 0],
    "j": [0, 1, 1, 1, 0, 0],
    "k": [1, 0, 0, 0, 1, 0],
    "l": [1, 0, 1, 0, 1, 0],
    "m": [1, 1, 0, 0, 1, 0],
    "n": [1, 1, 0, 1, 1, 0],
    "o": [1, 0, 0, 1, 1, 0],
    "p": [1, 1, 1, 0, 1, 0],
    "q": [1, 1, 1, 1, 1, 0],
    "r": [1, 0, 1, 1, 1, 0],
    "s": [0, 1, 1, 0, 1, 0],
    "t": [0, 1, 1, 1, 1, 0],
    "u": [1, 0, 0, 0, 1, 1],
    "v": [1, 0, 1, 0, 1, 1],
    "w": [0, 1, 1, 1, 0, 1],
    "x": [1, 1, 0, 0, 1, 1],
    "y": [1, 1, 0, 1, 1, 1],
    "z": [1, 0, 0, 1, 1, 1],
    "nothing": [0, 0, 0, 0, 0, 0]
}

// general score
localStorage.setItem('score', '0')
// to loop through the model and user and set the initial state
let modelIndex = 0
// let userIndex = 0
// both select the letter to work with
let index;
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
// the actual arrays
let model;
let user;
// the letter to display at the ui
let letra;

resetNumber()
setModel()
setUser()

function setUser() {
    const dotsUser = document.querySelectorAll('.pieceUser div div')
    
    for (elem in dotsUser) {
        dot = dotsUser[elem]
        if (dot instanceof HTMLDivElement) {
            
            dot.addEventListener('click', function (e) {
                if (this.classList.contains('dot')) {
                    
                    user[this.id] = 0
                    this.classList.remove('dot')
                    this.classList.add('notdot')

                } else {
                    user[this.id] = 1


                    this.classList.remove('notdot')
                    this.classList.add('dot')
                }

            })
        }
    }
}

let check = document.getElementById('check')

check.addEventListener('click', function (e) {
    if (model.length === user.length &&
        model.every(function (value, index) { return value === user[index] })) {
        score = Number(localStorage.getItem('score'))
        score++;
        localStorage.setItem('score', score)
        score = localStorage.getItem('score')
        scoreString = document.getElementById('scoreString')
        scoreString.innerHTML = 'score: ' + score
        resetNumber()
        setModel()
        // resetUser()
    }
})

function setModel() {
    const dotsModel = document.querySelectorAll('.pieceModel div div')

    for (elem in dotsModel) {
        dot = dotsModel[elem]

        if (dot instanceof HTMLDivElement) {

            if (model[modelIndex] == 0) {
                dot.classList.remove('dot')
                dot.classList.add('notdot')
            } else {
                dot.classList.remove('notdot')
                dot.classList.add('dot')
            }

            modelIndex++;


        }
    }
}

function resetNumber() {
    index = Math.floor(Math.random() * 26)
    model = letters[alphabet[index]]
    user = letters['nothing']
    modelIndex = 0
    // userIndex = 0
    letra = document.getElementById('letra')
    letra.innerHTML = 'letra actual: ' + alphabet[index]
}

// function resetUser(){
//     const dotsUser = document.querySelectorAll('.pieceModel div div')

//     for (elem in dotsUser) {
//         dot = dotsUser[elem]

//         if (dot instanceof HTMLDivElement) {

//             if (user[modelIndex] == 0) {
//                 dot.classList.remove('dot')
//                 dot.classList.add('notdot')
//             } else {
//                 dot.classList.remove('notdot')
//                 dot.classList.add('dot')
//             }

//             userIndex++;


//         }
//     }
// }