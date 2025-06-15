import { useState } from "react"
import { nanoid } from "nanoid"
import {generate} from "random-words"

import Status from "./status.jsx"
import HeartStatus from "./heart.jsx"
import Word from "./word.jsx"
import Alphabet from "./alphabet.jsx"
import ConfettiEffect from './confetti.jsx'

export default function AssemblyEndgame() {
    const [word,setWord] = useState(generate({minLength:3,maxLength:8}))
    const [guess,setGuess] = useState([])
    
    let letters = word.split("")
    
    const wrongGuess = guess.filter(letter => !letters.includes(letter))
    const isGameLost = wrongGuess.length < 8 ? false : true
    const isGameWon = letters.every(letter => guess.includes(letter))
    const isGameOver = isGameLost || isGameWon
 
    const letterArray = letters.map(letter =>{
        return <Word letter={letter} key={nanoid()} id={nanoid()} status={isGameOver} lost={isGameLost} guesses={guess} />
    })

    function guessLetter(guessedLetter){
        setGuess(prevArray => isGameOver ? [...prevArray] :
            prevArray.includes(guessedLetter) ? prevArray : [...prevArray,guessedLetter]
        )
    }

    function setNewGame(){
        setWord(generate({minLength:3,maxLength:8}))
        setGuess([])
    }

    return (
        <main>
            {isGameWon && <ConfettiEffect />} 
            <header>
                <h1>Hangman</h1>
                <p>Guess the word within 8 attempts to win!</p>
            </header>
            {isGameOver && <Status gameStatus={isGameOver} won={isGameWon} lost={isGameLost}/>}
            <HeartStatus wrongGuess={wrongGuess} status={isGameOver} />
            <section className="word-container">
                {letterArray}
            </section>
            <Alphabet toggle={guessLetter} guess={guess} letters={letters} disabled={isGameOver}/>
            {isGameOver && <button className="new-game-button" onClick={()=>{
                setNewGame()
                }
            }>
                NEW GAME
            </button>}
        </main>
    )
}
