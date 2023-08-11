import React from 'react';
import { CloseButton } from './CloseButton';
import { GiBee } from 'react-icons/gi';
import { TfiStatsUp } from 'react-icons/tfi';

import { BsPatchCheckFill } from 'react-icons/bs';
import { useGlobalContext } from '../context';

export const Statistics = () => {
  const { isStatsOpen, closeStats } = useGlobalContext();

  if (isStatsOpen)
    return (
      <article className='statsPanel'>
        <CloseButton closeFunction={closeStats} />

        <section className='statsPanel__content'>
          <div className='statsPanel__content__stats'>
            <h1 className='statsPanel__content__stats__title'>Statistics</h1>
            <div className='statsPanel__content__stats__per'>
              <div>
                <h1>0</h1>
                <p>Played</p>
              </div>

              <div>
                <h1>0</h1>
                <p>Win %</p>
              </div>

              <div>
                <h1>0</h1>
                <p>
                  Current <br /> streak
                </p>
              </div>

              <div>
                <h1>0</h1>
                <p>
                  Max <br /> Streak
                </p>
              </div>
            </div>

            <div className='statsPanel__content__data'>
              <h1> Guess distribution</h1>
              <p>No Data</p>
            </div>
            <a href='#' className='statsPanel__link'>
              My stats don't look right &#62;
            </a>
          </div>
          <div className='statsPanel__content__link'>
            <div className='statsPanel__content__link__btn'>
              <button className='statBtn'>
                <TfiStatsUp />
              </button>
              <button className='stickBtn'>
                <BsPatchCheckFill />
              </button>
            </div>

            <div className='statsPanel__content__link__login'>
              <span>New </span>
              <h2>Link your stats to a free New York Times account.</h2>
              <p> Your stats and streak will save wherever you play.</p>
              <a href='#' className='statsPanel__linkBtn'>
                Log in or create a free account
              </a>
            </div>
            <a href='#' className='statsPanel__link'>
              Tell me more &#62;
            </a>
          </div>

          <a
            className='statsPanel__linkBtn         statsPanel__content__bee
       '
          >
            <span> Play spelling bee</span>
            <button>
              <GiBee />
            </button>
          </a>
        </section>
      </article>
    );
};
