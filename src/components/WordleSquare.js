import React from 'react'

const WordleSquare = ({ guessChar, index, color }) => {
  return (
    <div style={{backgroundColor: color}} key={ index } className='wordle-square'>
        <span>{ guessChar }</span>
    </div>
  )
}

export default WordleSquare