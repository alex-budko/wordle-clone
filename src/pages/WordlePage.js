import React from 'react'
import { useState, useEffect } from 'react'
import WordleRow from '../components/WordleRow'

const WordlePage = () => {

    const [wordList, getWordList] = useState(null)
    const [word, createWord] = useState('Alexa')
    const [guesses, newGuess] = useState(Array(6).fill(null))

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

//   function getWord() {

//     console.log('here')
//     let i = Math.floor(getWordList.length * Math.random())

//     createWord(wordList[i])
//   }

    return (
        <div>
            {
                guesses.map(guess => {
                    return (
                        <WordleRow guess={ guess }/>
                    );
                })
            }
        </div>
    )
}

export default WordlePage