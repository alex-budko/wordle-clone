import React from 'react'
import { useState, useEffect } from 'react'
import WordleRow from '../components/WordleRow'

const WordlePage = () => {

    const [wordList, getWordList] = useState([])
    const [word, createWord] = useState('Alexa')
    const [guesses, setGuesses] = useState(Array(6).fill(''))
    const [curGuess, setCurGuess] = useState('')
    const [guessNum, setGuessNum] = useState(0)

    useEffect(()=>{
        const handleKeyDown = event => {
            const { key, keyCode } = event
            if ((keyCode >= 65 && keyCode <= 90) && (curGuess.length <= 4)) {
                
                let newGuesses = guesses

                setCurGuess(curGuess.concat(key.toUpperCase()))

                newGuesses[guessNum] = curGuess

                setGuesses(newGuesses)
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [guesses, curGuess, guessNum])
    
    return (
        <div>
            {
                guesses.map((guess, index) => {
                    console.log(guess)
                    return (
                        <div key={index} >
                            <WordleRow guess={ guess } />
                        </div>
                    );
                })
            }
        </div>
    )
}

export default WordlePage