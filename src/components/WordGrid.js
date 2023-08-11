import React from 'react';
import { useGlobalContext } from '../context';
import { Cell } from './Cell';

export const WordGrid = () => {
  const { wordGrid, results } = useGlobalContext();

  const checkLetter = (letter, index, row) => {
    if (row < results.length) {
      const yellowLettersIndex = results[row][1].map((y) => y.index);

      const greenLettersIndex = results[row][0].some(
        (ele) => ele.index === index
      );

      if (greenLettersIndex) return 'green';
      else {
        if (yellowLettersIndex.includes(index)) {
          return 'yellow';
        } else return 'grey';
      }
    }
  };

  return (
    <div className='cellsGrid'>
      {wordGrid.map((row, rowIndex) => {
        return row.map((letter, index) => {
          let color = checkLetter(letter, index, rowIndex) || '';
          return <Cell color={color} letter={letter} key={index} />;
        });
      })}
    </div>
  );
};
