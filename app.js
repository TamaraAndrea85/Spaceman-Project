 // Array of words
const words = ['jupiter', 'stars', 'astroid', 'black hole', 'satilite', 'orbit', 'universe', 'umbra', 'lunar', 'space station', 'astronomy', 'uper nova', 'nubula', 'dark matter', 'celestial body']

// guesses Array
let myGuesses = []

//variables
let wordSpace = "_"
let guess = ' '

//score
let numOfTries = 10
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
                    guess.innerHTML = ' - ';
                    words.appendChild('.spaces')
                    wordSpace = 5
                
                } else {
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
                            
                            
                        }else{
                            div.innerHTML= ' - '
                        }
                        document.querySelector('.word-space').append(div)
                        
                    }
               
                
                } 

                 
            
    
            }))
        }
        ans()

        function getNumOfTries (){
            const showTries = document.querySelector('#myTries')
            showTries.innerHTML = ' You have ' + numOfTries + ' numOfTries'
            if(numOfTries < 1){
                showTries.innerHTML = 'You loose!'
               
                
            }
            for(i = 0; i < myGuesses.length; i++) {
                if(counter + words === myGuesses.length) {
                    showTries.innerHTML = 'You Win!'
                }
            }

        }
        getNumOfTries()
        
    
       
    
        
        
    }
    play()
    
    
    
    //  function score () {
    //     const currentScore = 0
    //       for (let i = 0; i < currentScore; i++){
    //           if (words.length === numOfGuesses)
    //           currentScore += 1
    //           prompt(`Your score is ${currentScore}`)
    //           console.log(currentScore)
    
              
    //      }
    
    // {
    
    //     }
    
    //  }
    //  score()
    
    
    
    
        
    
