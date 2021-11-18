 // Array of words
const words = ['planet', 'stars', 'astroid', 'moon', 'satilite', 'orbit', 'universe', 'umbra', 'lunar', 'space', 'astronomy', 'eclipse', 'nebula', 'mars', 'meteorite']

// guesses Array
let myGuesses = []


//variables
let wordSpace = "_"
let guess = ' '
let space; //number of spaces in word


//score
let tries = 10
let counter ;
//Get random word
let index = Math.floor(Math.random()* words.length)  

//play function
function play() {
    let userInput = prompt(`would you like to play spaceman? (Y/N)`, "Y")
    console.log(words[index])
    
        
        
    for(let i = 0; i < words[index].length; i++){
        console.log(words[0][i])
            
        let div = document.createElement('div')
        div.classList.add('letters')
        div.innerHTML=' - '//words[0][i]
        document.querySelector('.word-space').append(div)
           
    
    }                                        
}
//handle click function, inactivates buttons once clicked
let handleclick = e => {
    e.target.removeEventListener('click', handleclick)
    e.target.style.backgroundColor= 'grey'
    console.log(e.target.innerHTML)
    myGuesses.push(e.target.innerHTML)
    console.log(myGuesses)
    console.log(words[index].includes(e.target.innerHTML))
    if(words[index].includes(e.target.innerHTML)){
        document.querySelector('.word-space').innerHTML= '  '
        // let correct = document.createElement('ul')
        

        for(let i = 0; i < words[index].length; i++){
            
            // correct.setAttribute('id','correctLetters' )
            // let guess= document.createElement('li')
            // guess.setAttribute('class','guess')
            console.log(words[0][i])
             let div = document.createElement('div')
             div.classList.add('letter')
              if (myGuesses.includes(words[index][i])){
                // if(words[index]=== '- '){
                    // guess.innerHTML = '-'
                    space = 1
                
                   
                 div.innerHTML = words[index][i]
                        
                                 
              } else {
                 div.innerHTML = ' - '
         }
                
            document.querySelector('.word-space').append(div)
            
        }
             getNumOfTries()         
            
              
} else {
        tries -- 
        getNumOfTries()
    
    }
                        
}
function ans () {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.addEventListener('click',handleclick))
    // buttons.forEach(button => button.addEventListener('click', () => 
    
    
    


    
}
ans()



 

function getNumOfTries (){
    console.log(tries)
    const showTries = document.querySelector('#myTries')
    showTries.innerHTML = ' You have ' + tries + ' tries'
    if(tries < 1){
       setTimeout(() =>{prompt(`Would you like to try again? (Y,N)`, 'Y')
       showTries.innerHTML = 'You loose!'

       },2000) 
      
       
        
               
    }
    // if(tries > 0  && words[index].length === myGuesses.length) {
    
        if(tries > 0  && Array.from(document.querySelectorAll('.letters')).every(letter => letter.innerHTML !== ' - ')) {
            // showTries.innerHTML = 'You Win!'
             setTimeout(() =>{alert(`You Win!`)
             showTries.innerHTML = 'You Win!'
     
             },1000)
            
        
        }
        
        
        
}




function reset(){
    let playAgain= document.getElementsByClassName('playAgain').addEventListener('click', reset)
    for(let i = 0; i < words[index].length; i++){
        console.log(words[0][i])
            
        let div = document.createElement('div')
        div.innerHTML=' - '//words[0][i]
        document.querySelector('.word-space').append(div)
           
    
    } 
    reset()       
//   playAgain.addEventListener('click',=)

}
  



                
 
play()

                

                



            
           

            
            
            


        
        








        
    
       
    
        
        
    
    

    
    
    
    
    
    
    
        
    
