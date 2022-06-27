import React from 'react'
import WordleSquare from './WordleSquare'

const WordleRow = ( {guess, colors} ) => {
    let guessChars = ['', '', '', '', '']

    if (guess !== null) {
        for (let i = 0; i < guess.length; i++) {
            guessChars[i] = guess[i]
        }
    } 
    

    return (
        <div className='wordle-row'>
            <div></div>
            { 
                guessChars.map((guessChar, index) => {
                    return (
                        <div key={index}>
                            <WordleSquare color={ colors[index] } index={ index } timer={index + 0.15} guessChar={ guessChar }/>
                        </div>
                    );
                })
            }
            <div></div>
        </div>
    )
}

export default WordleRow