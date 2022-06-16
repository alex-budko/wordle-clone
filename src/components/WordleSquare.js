import React from 'react'

const WordleSquare = ({ guessChar }) => {
  return (
    <div className='wordle-square'>
        { guessChar }
    </div>
  )
}

export default WordleSquare