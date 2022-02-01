import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {/* map through each letter of the selectedWord checking to see if it's in the correctLetters array */}
      {selectedWord.split('').map( (letter, i) => {
        return (
          <span className='letter' key={i}>
            {/* check to see if it includes the 'letter' if it does include it, display the letter in the span. If it does not include it, display a blank */}
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
};
export default Word;
