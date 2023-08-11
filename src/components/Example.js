import React from 'react';

export const Example = ({ word, indexColoredLetter, color }) => {
  const exampleColor = (() => {
    switch (color) {
      case 'green':
        return '#367E18';
      case 'yellow':
        return '#FBDF07';
      case 'grey':
        return '#3C4048';
    }
  })();

  return (
    <div className='example'>
      {word.split('').map((letter, index) => {
        if (indexColoredLetter === index)
          return (
            <button
              key={index}
              style={{ backgroundColor: exampleColor, border: 'none' }}
              className='example__btn'
            >
              {letter}
            </button>
          );

        return (
          <button key={index} className='example__btn'>
            {letter}
          </button>
        );
      })}
    </div>
  );
};
