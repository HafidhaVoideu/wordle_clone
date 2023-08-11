import React from 'react';
import { useGlobalContext } from '../context';
import { CloseButton } from './CloseButton';

export const Result = () => {
  const { resultsPanel, closeResults } = useGlobalContext();
  if (resultsPanel.isResultOpen)
    return (
      <article className='resultPanel'>
        <CloseButton closeFunction={closeResults} />
        <h1 className='resultPanel__title'>
          {resultsPanel.verdict === 'winner'
            ? 'Congratulations!'
            : 'Oops, try again next time!'}
        </h1>

        {resultsPanel.verdict === 'winner' ? (
          <div className='resultPanel__content'>
            <iframe
              src='https://giphy.com/embed/BPJmthQ3YRwD6QqcVD'
              width='480'
              height='270'
              frameBorder='0'
              class='giphy-embed'
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className='resultPanel__content'>
            <iframe
              src='https://giphy.com/embed/3ohA2ZD9EkeK2AyfdK'
              width='480'
              height='260'
              frameBorder='0'
              class='giphy-embed'
              allowFullScreen
            ></iframe>
          </div>
        )}
      </article>
    );
};
