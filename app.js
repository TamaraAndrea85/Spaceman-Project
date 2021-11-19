// Array of words
const words = ['planet', 'stars', 'astroid', 'moon', 'satilite', 'orbit', 'universe', 'umbra', 'lunar', 'space', 'astronomy', 'eclipse', 'nebula', 'mars', 'meteorite']

// guesses Array
let myGuesses = []


//spaces
let wordSpace = ' - '




//# of remaining tries
let tries = 10

//Get random word
let index = Math.floor(Math.random() * words.length)

//play function
function play() {
    let userInput = prompt(`would you like to play spaceman? (Y/N)`, "Y")
    console.log(words[index])



    for (let i = 0; i < words[index].length; i++) {
        // console.log(words[0][i])

        let div = document.createElement('div')
        div.classList.add('letters')
        div.innerHTML = ' - ' //words[0][i]
        document.querySelector('.word-space').append(div)


    }
}
//handle click function, inactivates buttons once clicked
let handleclick = e => {
    e.target.removeEventListener('click', handleclick)
    e.target.style.backgroundColor = 'rgb(173, 173, 240)'
    console.log(e.target.innerHTML)
    myGuesses.push(e.target.innerHTML)
    console.log(myGuesses)
    console.log(words[index].includes(e.target.innerHTML))
    if (words[index].includes(e.target.innerHTML)) {
        document.querySelector('.word-space').innerHTML = '  '
            


        for (let i = 0; i < words[index].length; i++) {
            let div = document.createElement('div')
            div.classList.add('letters')
            if (myGuesses.includes(words[index][i])) {
                


                div.innerHTML = words[index][i]


            } else {
                div.innerHTML = ' - '
            }

            document.querySelector('.word-space').append(div)

        }
        getNumOfTries()


    } else {
        tries--
        getNumOfTries()

    }

}

function ans() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.addEventListener('click', handleclick))

         






}
ans()





function getNumOfTries() {
    console.log(tries)
    const showTries = document.querySelector('#myTries')
    showTries.innerHTML = ' You have ' + tries + ' tries'
    if (tries < 1) {
        setTimeout(() => {
            alert('Awww better luck next time :(')
            showTries.innerHTML = 'You loose!'

        }, 2000)




    }
    // if(tries > 0  && words[index].length === myGuesses.length) {
    Array.from(!document.querySelectorAll('.letters')).forEach(letter => {
        console.log(letter.innerHTML)
    })
    if (tries > 0 && Array.from(document.querySelectorAll('.letters')).every(letter => letter.innerHTML !== ' - ')) {
        // showTries.innerHTML = 'You Win!'
        setTimeout(() => {
            alert('Good Job!')
            showTries.innerHTML = 'You Win!'

        }, 1000)


    }



}

//game reset

let tryAgain = document.querySelector('.Try-Again')
tryAgain.addEventListener('click', () => {
    window.location.reload(true)

    
  



    


    
})








    
    

    
    
        








 play()