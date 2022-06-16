import React from 'react'
import { useState, useEffect } from 'react'
import WordleRow from '../components/WordleRow'

const WordlePage = () => {

    const [wordList, getWordList] = useState([])
    const [word, createWord] = useState('Alexa')
    const [guesses, setGuesses] = useState(Array(6).fill(''))
    const [curGuess, setCurGuess] = useState(null)
    const [guessNum, setGuessNum] = useState(0)

  // useEffect(()=> {
  //   async function fetchAPI() {
  //     let response = await fetch(`https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&api_key=YOURAPIKEY
  //     `, {
  //       mode: 'cors',
  //       credentials: 'include'
  //     })
  //     let data = await JSON.parse(response)
  //     console.log('Data:', data)
  //     getWordList(data)
  //   }
  //   fetchAPI() 
  // }, [])
    async function currentGuess(e) {
        await setCurGuess(e.target.value)
    }

    async function submitGuess() {
        if (curGuess !== '') {
            await setGuesses(guesses => guesses[guessNum] = curGuess)
            await setGuessNum(guessNum + 1)
        }
    }

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
            <input type='text' onChange={currentGuess} />
            <button onClick={submitGuess}>CLICK ME</button>
        </div>
    )
}

export default WordlePage