import React from 'react'
import WordleSquare from './WordleSquare'

const WordleRow = ( {guess} ) => {
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
                            <WordleSquare index = {index} guessChar={ guessChar }/>
                        </div>
                    );
                })
            }
            <div></div>
        </div>
    )
}

export default WordleRow