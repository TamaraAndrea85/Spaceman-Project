 // Array of words
const words = ['jupiter', 'stars', 'astroid', 'black hole', 'satilite', 'orbit', 'universe', 'umbra', 'lunar', 'space station', 'astronomy', 'uper nova', 'nebula', 'dark matter', 'celestial body']

// guesses Array
let myGuesses = []

//variables
let wordSpace = "_"
let guess = ' '
let context;

//score
let tries = 10
let counter ;

    
    
    //play function
function play() {
    let userInput = prompt(`would you like to play spaceman? (Y/N)`, "Y")
        
    let index = Math.floor(Math.random()* words.length)
    console.log(words[index])
        
        
    for(let i = 0; i < words[index].length; i++){
        console.log(words[0][i])
            
      

            
    
            
        let div = document.createElement('div')
        div.innerHTML=' - '//words[0][i]
            
        document.querySelector('.word-space').append(div)
            
    
         if(userInput === "Y"){
            if(words[i] === ' - '){
                guess.innerHTML = ' - '
                words.appendChild('.spaces')
                wordSpace = 1
                
            } 
            guess.innerHTML = ' - '
    
                
                
    
                
        }
    
    }                                        
}
function ans () {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.addEventListener('click', e => {
        console.log(e.target.innerHTML)
        myGuesses.push(e.target.innerHTML)
        console.log(myGuesses)
        console.log(words[index].includes(e.target.innerHTML))
        if(words[index].includes(e.target.innerHTML)){
            document.querySelector('.word-space').innerHTML= '  '
            for(let i = 0; i < words[index].length; i++){
                console.log(words[0][i])
                let div = document.createElement('div')
                if (myGuesses.includes(words[index][i])){
                    div.innerHTML=words[index][i]
                            
                            
                            
                } else if(words[index][i] !== myGuesses.length){
                    div.innerHTML= ' - '
                    tries -= 1
                    getNumOfTries()
                            
                }
                document.querySelector('.word-space').append(div)
                        
            }
               
                
        }                     
    }))
}
 ans()

function getNumOfTries (){
     const showTries = document.querySelector('#myTries')
    showTries.innerHTML = ' You have ' + tries + ' tries'
     if(tries < 1){
         showTries.innerHTML = 'You loose!'
               
    }
    for(i = 0; i < myGuesses.length; i++) {
        if(words[index][i] + tries[i] === myGuesses.length) {
            showTries.innerHTML = 'You Win!'
        }
    }
}
getNumOfTries()

function animateMan () {
    let drawMan = tries ;
    drawArray[drawMan]()
}

    

function canvas(){
    let littleMan = document.getElementById('man');
    let context = littleMan.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = 3;
}

function head(){
    sadLittleMan = document.getElementById('littleMan')
    context = SadLittleMan.getContext('2d')
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
}

function draw ($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke()
}
draw()
        
function gallow1() {
    draw (0, 150, 150, 150);
}

function  gallow2() {
     draw (10, 0, 10, 600)
}

 function gallow3() {
    draw (0, 5, 70, 5);
        
}

function gallow4() {
    draw (60, 5, 60, 15);
}

function torso() {
    draw (60, 36, 60, 70);
}

function rArm() {
    draw (60, 46, 100, 50);
}

function lArm() {
    draw (60, 46, 20, 50);
}

function rLeg() {
    draw (60, 70, 100, 100);
}

function lLeg() {
    draw (60, 70, 20, 100);
}

drawArray = [rLeg, lLeg, rArm, lArm,  torso,  head, gallow4, gallow3, gallow2, gallow1];

                
play()
canvas()
draw()

                

                



            
           

            
            
            


        
        








        
    
       
    
        
        
    
    

    
    
    
    
    
    
    
        
    
