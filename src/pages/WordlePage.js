import React from 'react'
import { useState, useEffect } from 'react'
import { WordleWords } from '../components/data/WordleWords'
import WordleRow from '../components/WordleRow'

const WordlePage = () => {

    const [word, createWord] = useState('')
    const [guesses, setGuesses] = useState(Array(6).fill(''))
    const [curGuess, setCurGuess] = useState('')
    const [colors, setColors] = useState(Array(6).fill(Array(5).fill('white')))
    const [guessNum, setGuessNum] = useState(0)
    const [started, setStarted] = useState(false)
    const [ended, setEnded] = useState(false)

    function restart() {
        console.log('restart')
    }

    function changeColors() {
        for (let i = 0; i < 5; i++) {
            if (curGuess && curGuess[i] === word[i]) {
                setColors(colors => colors.map((colorRow, j) => 
                    colorRow = guessNum===j ? [...colorRow.slice(0, i), ['#adff2f'], ...colorRow.slice(i + 1)] : colorRow
                ))
            }
            else if (curGuess && word.includes(curGuess[i])) {
                setColors(colors => colors.map((colorRow, j) => 
                colorRow = guessNum===j ? [...colorRow.slice(0, i), ['#ffd700'], ...colorRow.slice(i + 1)] : colorRow
                ))
            } else {
                setColors(colors => colors.map((colorRow, j) => 
                colorRow = guessNum===j ? [...colorRow.slice(0, i), ['#f0f8ff'], ...colorRow.slice(i + 1)] : colorRow
                ))
            }
        }
        console.log(word)
        setCurGuess(curGuess => (guessNum === 5 || word === curGuess) ? curGuess : '')
    }

    useEffect(()=>{
        if (!ended) {
            const handleKeyDown = (event) => {
                const { key, keyCode } = event
                    //if alphabetical key is pressed
                if ((keyCode >= 65 && keyCode <= 90) && (curGuess.length < 5)) {
                    setCurGuess(curGuess.concat(key.toUpperCase()))
                    //if 'BACKSPACE' is pressed
                } else if (keyCode === 8 && curGuess.length >= 1) {
                    setCurGuess(curGuess.slice(0, curGuess.length - 1))
                    //if 'ENTER' is pressed
                } else if (keyCode === 13 && curGuess.length === 5 && guesses.length) {
                    //check winning conditions
                    if (WordleWords.includes(curGuess)) {
                        //won
                        if (word === curGuess) {
                            setEnded(true)
                        } else if (guessNum === 5) {
                            setEnded(true)
                        } else {
                            setGuessNum(guessNum + 1)
                        }
                        changeColors()
                    }
                }
            }
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown)
        }
    })

    useEffect(()=>{
        if (!started) {
            let n = Math.floor(Math.random() * WordleWords.length + 1)
            createWord(WordleWords[n])
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
    }, [curGuess, guessNum, word, started])

    return (
        <div>
            {
                guesses.map((guess, index) => {
                    return (
                        <div key={index} >
                            <WordleRow colors={ colors[index] } guess={ guess } />
                        </div>
                    );
                })
            }
        </div>
    )
}

export default WordlePage