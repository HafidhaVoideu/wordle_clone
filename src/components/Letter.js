import React from 'react';
import { useGlobalContext } from '../context';

export const Letter = ({ letter, color }) => {
  const { enterLetter, enterWord, deleteLetter, results } = useGlobalContext();

  if (typeof letter === 'object')
    return (
      <button onClick={() => deleteLetter(letter)} className='letter'>
        {letter}
      </button>
    );
  else if (letter.length > 1)
    return (
      <button onClick={() => enterWord(letter)} className='letter'>
        {letter}
      </button>
    );
  else
    return (
      <button
      
        onClick={() => enterLetter(letter)}
        className={`letter letter--${color}`}
      >
        {letter}
      </button>
    );
};
