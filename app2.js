window.onload = function () {

    // Array of words...
    const words = ['Jupiter', 'Stars', 'Astroid', 'Black hole', 'Satilite', 'Orbit', 'Universe', 'Umbra', 'Lunar', 'Space station', 'Astronomy', 'Super nova', 'Nubula', 'Dark matter', 'Celestial body']

    const upperCasedWords = words.map(words => words.toUpperCase())
    console.log(upperCasedWords)
    
    
    
    
    
    
    //variables
    let wordSpace = "_"
    let guess = ''
    let myGuesses = []
    let remainingGuesses = undefined
    let correctword = ' '
    
    
    
    
    //Event Listeners
    
    
    
    //functions for game
    function play() {
        let userInput = prompt(`would you like to play spaceman? (Y/N)`, "Y")
        
        let index = Math.floor(Math.random()* words.length)
        console.log(words[index])
        
        for(let i = 0; i < words[index].length; i++){
            console.log(i)
            console.log(words[0][i])
            
    
            // correctword.setAttribute('id', 'myWord');
            let div = document.createElement('div')
             div.innerHTML=' - '//words[0][i]
            
             document.querySelector('.hold-words').append(div)
            let  guess = document.createElement('li');
             guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
    
          if(userInput === "Y"){
            if(words[index].length === ' - '){
                guess.innerHTML = ' - ';
            wordSpace = 1;
                
            } else {
                guess.innerHTML = ' - ';
    
                myGuesses.push(guess)
                if(myGuesses === words[index].length) {
                    prompt(`You win!`)
    
    
                }
                
    
                
            }
    
          }
        
            
    
                
           
            
            
            
        }
        results = function (){}
        const buttons = document.querySelectorAll('button')
        buttons.forEach(button => button.addEventListener('click', e => {
            console.log(e.target.innerHTML)
         
            console.log(words[index].includes(e.target.innerHTML))
            if(words[index].includes(e.target.innerHTML)){
                for(let i = 0; i < words[index].length; i++){
                    console.log(words[index][i])
                }
               
                
            } 
            ans = function () {
                wordSpace = document.getElementById('.word-space')
                correct = document.createElement('ul')

                for (var i = 0; i < words[index].length; i++) {
                    correct.setAttribute('id', 'myword');
                    guess = document.createElement('li');
                    guess.setAttribute('class', 'guess');
                    if(words[index].includes(e.target.innerHTML)){
                        document.querySelector('.word-space').innerHTML= '  ' 

                    }
                }

                        



                
                
                
      
            }   
                 
            
    
        }))
    
       
    
        
        
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
    
    }

  
