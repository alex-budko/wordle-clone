import React from 'react'
import { useState, useEffect } from 'react'
import WordleRow from '../components/WordleRow'

const WordlePage = () => {

    const [word, createWord] = useState('ALEXA')
    const [guesses, setGuesses] = useState(Array(6).fill(''))
    const [curGuess, setCurGuess] = useState('')
    const [guessNum, setGuessNum] = useState(0)
    const [started, setStarted] = useState(false)

    useEffect(()=>{
        const handleKeyDown = (event) => {
            const { key, keyCode } = event
                //if alphabetical key is pressed
            if ((keyCode >= 65 && keyCode <= 90) && (curGuess.length < 5)) {
                setCurGuess(curGuess.concat(key.toUpperCase()))
                //if 'BACKSPACE' is pressed
            } else if (keyCode === 8 && curGuess.length >= 1) {
                setCurGuess(curGuess.slice(0, curGuess.length - 1))
                //if 'ENTER' is pressed
            } else if (keyCode === 13) {
                if (curGuess.length === 5) {
                    setCurGuess('')
                    setGuessNum(guessNum + 1)
                } else {
                    return;
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown)
    })

    useEffect(()=>{
        if (!started) {
            setStarted(true)
        } else {
            setGuesses(guesses => {
                return [
                    ...guesses.slice(0, guessNum),
                    guesses[guessNum] = curGuess,
                    ...guesses.slice(guessNum + 1),
                ]
            })
        }
    }, [curGuess, guessNum, started])

    return (
        <div>
            {
                guesses.map((guess, index) => {
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