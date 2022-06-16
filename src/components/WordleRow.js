import React from 'react'
import WordleSquare from './WordleSquare'

const WordleRow = ( {guess} ) => {

    return (
        <div>
            {
                guess.map(guessChar => {
                    return (
                        <WordleSquare guessChar={ guessChar }/>
                    );
                })
            }
        </div>
    )
}

export default WordleRow