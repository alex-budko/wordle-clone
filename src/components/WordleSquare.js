import React from 'react'

const WordleSquare = ({ guessChar, index, color, timer}) => {
    
  return (
      <div 
        style={{backgroundColor: color, transition: `background-color 0.35s`, transitionDelay: `${timer}s`, transitionTimingFunction: 'ease-out'}}
        key={ index } 
        className='wordle-square'>
          
        <span>
          { guessChar }
        </span>

      </div>
  )
}

export default WordleSquare