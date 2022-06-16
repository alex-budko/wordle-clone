import React from 'react'

const WordleSquare = ({ guessChar, index }) => {
  return (
    <div key={ index } className='wordle-square'>
        <span>{ guessChar }</span>
    </div>
  )
}

export default WordleSquare