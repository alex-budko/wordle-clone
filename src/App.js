import WordlePage from "./pages/WordlePage";
import { useState, useEffect } from 'react'

function App() {

  const [wordList, getWordList] = useState(null)
  const [word, createWord] = useState(null)

  useEffect(()=> {
    async function fetchAPI() {
      let response = await fetch('https://api.frontendexpert.io/api/fe/wordle-words')
      let data = await JSON.parse(response)
      getWordList(data)
    }
    fetchAPI() 
  }, [])

  function getWord() {
    let i = getWordList.length * Math.random()
    createWord(wordList[i])
  }

  

  return (
    <div className="App">
      <WordlePage getWord={getWord} />
    </div>
  );
}

export default App;
