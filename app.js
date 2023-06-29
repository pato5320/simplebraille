


const letters = {
    "a": [1,0,0,0,0,0],
    "b": [1,0,1,0,0,0],
    "c": [1,1,0,0,0,0],
    "d": [1,1,0,1,0,0],
    "e": [1,0,0,1,0,0],
    "f": [1,1,1,0,0,0],
    "g": [1,1,1,1,0,0],
    "h": [1,0,1,1,0,0],
    "i": [0,1,1,0,0,0],
    "j": [0,1,1,1,0,0],
    "k": [1,0,0,0,1,0],
    "l": [1,0,1,0,1,0],
    "m": [1,1,0,0,1,0],
    "n": [1,1,0,1,1,0],
    "o": [1,0,0,1,1,0],
    "p": [1,1,1,0,1,0],
    "q": [1,1,1,1,1,0],
    "r": [1,0,1,1,1,0],
    "s": [0,1,1,0,1,0],
    "t": [0,1,1,1,1,0],
    "u": [1,0,0,0,1,1],
    "v": [1,0,1,0,1,1],
    "w": [0,1,1,1,0,1],
    "x": [1,1,0,0,1,1],
    "y": [1,1,0,1,1,1],
    "z": [1,0,0,1,1,1],
    "nothing": [0,0,0,0,0,0]
}

let index;
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let model;
let user;
let letra;

console.log('letter ' + alphabet[index])
localStorage.setItem('score', '0')

let modelIndex = 0

resetNumber()
setModel()


const dotsUser = document.querySelectorAll('.pieceUser div div')

for(elem in dotsUser){
    dot = dotsUser[elem]
    if(dot instanceof HTMLDivElement){
        
        dot.addEventListener('click', function(e){
            if (this.classList.contains('dot')){
                user[this.id] = 0
                this.classList.remove('dot')
                this.classList.add('notdot')

            }else{
                user[this.id] = 1
                

                this.classList.remove('notdot')
                this.classList.add('dot')
            }
            
        })
    }
}

let check  = document.getElementById('check')

check.addEventListener('click', function(e){
    if(model.length === user.length && 
    model.every(function(value, index) { return value === user[index]}) ){
        score = Number(localStorage.getItem('score'))
        score++;
        localStorage.setItem('score', score)
        score = localStorage.getItem('score')
        scoreString = document.getElementById('scoreString')
        scoreString.innerHTML = 'score: ' + score
        resetNumber()
        setModel()
    }
})

function setModel(){
    const dotsModel = document.querySelectorAll('.pieceModel div div')

    for(elem in dotsModel){
        dot = dotsModel[elem]
    
        if(dot instanceof HTMLDivElement){
            
            if(model[modelIndex] == 0){
                dot.classList.remove('dot')
                dot.classList.add('notdot')
            }else{
                dot.classList.remove('notdot')
                dot.classList.add('dot')
            }
    
            modelIndex++;
            
            
        }
    }
}

function resetNumber(){
    index = Math.floor(Math.random() * 26)
    model = letters[alphabet[index]]
    user = letters['nothing']
    modelIndex = 0
    letra = document.getElementById('letra')
    letra.innerHTML = 'letra actual: ' + alphabet[index]
}