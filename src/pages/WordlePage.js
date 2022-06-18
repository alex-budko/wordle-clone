import React from 'react'
import { useState, useEffect } from 'react'
import WordleRow from '../components/WordleRow'

const WordlePage = () => {

    const [word, createWord] = useState('Alexa')
    const [guesses, setGuesses] = useState(Array(6).fill(''))
    const [curGuess, setCurGuess] = useState('')
    const [guessNum, setGuessNum] = useState(0)

    useEffect(()=>{
        const handleKeyDown = (event) => {
            const { key, keyCode } = event
            if ((keyCode >= 65 && keyCode <= 90) && (curGuess.length <= 5)) {
                setCurGuess(curGuess.concat(key.toUpperCase()))
            } else {
                setGuessNum(guessNum + 1)
                setCurGuess('')
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown)
    })

    // useEffect(()=>{
    //     setGuesses((guesses)=> {
    //         guesses[guessNum] = curGuess

    //     }
    // }, [curGuess])


    // useEffect(()=>
    
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