import React from 'react';
import { CloseButton } from './CloseButton';
import { Example } from './Example';
import { TfiStatsUp } from 'react-icons/tfi';
import { useGlobalContext } from '../context';

export const Questions = () => {
  const { isHelpOpen, closeHelp } = useGlobalContext();
  if (isHelpOpen)
    return (
      <article className='quesPanel'>
        <CloseButton closeFunction={closeHelp} />

        <div className='quesPanel__content'>
          <div className='quesPanel__content__titles'>
            <h1> how to play</h1>
            <h2>Guess the word in six Trials.</h2>
          </div>

          <ul className='quesPanel__content__list'>
            <li>Each guess must be a valid 5-letter word.</li>
            <li>
              The color of the tiles will change to show how close your guess
              was to the word.
            </li>
          </ul>

          <h2 className='quesPanel__content__exampTitle'>Examples</h2>
          <figure className='quesPanel__content__example'>
            <Example word='weary' indexColoredLetter={0} color='green' />
            <figcaption>
              <b>W</b> is in the word and in the correct spot.
            </figcaption>
          </figure>

          <figure className='quesPanel__content__example'>
            <Example word='pills' indexColoredLetter={1} color='yellow' />
            <figcaption>
              <b>I</b> is in the word but in the wrong spot.
            </figcaption>
          </figure>

          <figure className='quesPanel__content__example'>
            <Example word='vague' indexColoredLetter={3} color='grey' />
            <figcaption>
              <b>U</b> is not in the word in any spot.
            </figcaption>
          </figure>
        </div>

        <div className='quesPanel__stats'>
          <button className='quesPanel__stats__btn'>
            <TfiStatsUp />
          </button>
          <img />
          <p>
            <a href='#'>Log in or create a free NYT account</a> to link you
            stats.
          </p>
        </div>

        <div className='quesPanel__contact'>
          <p className='quesPanel__contact__info'>
            A new puzzle is released daily at midnight. If you haven’t already,
            you can
            <a href='#'>sign up</a>
            for our daily reminder email.
          </p>

          <p>
            Have feedback? Email us article
            <a href='#'>nytgames@nytimes.com.</a>
          </p>
        </div>
      </article>
    );
};

//Yoann Bourgeois :video of success, the acrobat.
