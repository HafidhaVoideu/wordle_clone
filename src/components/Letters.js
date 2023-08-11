import React from 'react';
import { Letter } from './Letter';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { useGlobalContext } from '../context';

export const Letters = () => {
  const { results, resultsPanel } = useGlobalContext();
  const firstRowLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const secondRowLetters = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const thirdRowLetters = [
    'Enter',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    <RiDeleteBack2Line />,
  ];

  var color;
  const colorFun = (letter) => {
    color = '';

    let greenLetters = [];

    results.forEach((green) => {
      let g;
      g = green[0].map((ele) => ele.letter);
      greenLetters = [...g, ...greenLetters];
      return;
    });

    let yellowLetters = [];
    results.forEach((yellow) => {
      let y;
      y = yellow[1].map((ele) => ele.letter);
      yellowLetters = [...y, ...yellowLetters];
      return;
    });

    let greyLetters = [];
    results.forEach((grey) => {
      let gr;
      gr = grey[2].map((ele) => ele.letter);
      greyLetters = [...gr, ...greyLetters];
      return;
    });

    if (greenLetters.includes(letter)) color = 'green';
    else if (yellowLetters.includes(letter)) color = 'yellow';
    else if (greyLetters.includes(letter)) color = 'grey';

    return color;
  };

  return (
    <div
      className={`letters ${
        resultsPanel.verdict === 'winner' && 'disableLetters'
      } `}
    >
      <section className='letters__row '>
        {firstRowLetters.map((letter, index) => {
          colorFun(letter);
          return <Letter color={color} key={index} letter={letter} />;
        })}
      </section>

      <section className='letters__row letters__row--second'>
        {secondRowLetters.map((letter, index) => {
          color = '';

          colorFun(letter);

          return <Letter color={color} key={index} letter={letter} />;
        })}
      </section>

      <section className='letters__row letters__row--last'>
        {thirdRowLetters.map((letter, index) => {
          colorFun(letter);

          return <Letter color={color} key={index} letter={letter} />;
        })}
      </section>
    </div>
  );
};
