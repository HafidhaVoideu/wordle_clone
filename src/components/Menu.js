import React from 'react';
import { CloseButton } from './CloseButton';

import { SiNewyorktimes } from 'react-icons/si';

import { GiJerusalemCross } from 'react-icons/gi';

import { FiCrosshair } from 'react-icons/fi';

import { AiOutlineRobot } from 'react-icons/ai';
import { TbLetterA } from 'react-icons/tb';
import { CgBee } from 'react-icons/cg';
import { useGlobalContext } from '../context';
export const Menu = () => {
  const { isMenuOpen, closeMenu } = useGlobalContext();
  if (isMenuOpen)
    return (
      <nav className='menu'>
        <div>
          <header className='menu__header'>
            <div className='menu__header__div'>
              <button className='btn'>
                <SiNewyorktimes />
              </button>
              <h1>Games</h1>
            </div>
            <CloseButton closeFunction={closeMenu} />
          </header>

          <h2 className='menu__moreFrom'>More from new york times Games</h2>

          <ul className='menu__more'>
            <li>
              <p> Spelling bee</p>
              <button className='btn btn--color menu__more__btn--yellow'>
                <CgBee />
              </button>
            </li>
            <li>
              <p> The crossWord</p>
              <button className=' btn btn--color menu__more__btn--blue'>
                <FiCrosshair />
              </button>
            </li>
            <li>
              <p>The mini</p>
              <button className='btn'>
                <GiJerusalemCross />
              </button>
            </li>
            <li>
              <p>WordleBot: Your daily Wordle companion</p>
              <button className=' btn  btn--color  menu__more__btn--pink'>
                <AiOutlineRobot />
              </button>
            </li>
            <li className='menu__more__item'>
              <p>GamePLay stories </p>
            </li>
            <li className='menu__more__item'>
              <p>More Games</p>
            </li>
          </ul>

          <ul className='menu__more'>
            <li>
              <p>The New York Times</p>

              <button className='btn'>
                <SiNewyorktimes />
              </button>
            </li>

            <li>
              <p>New York Times Cooking</p>

              <button className=' btn btn--color menu__more__btn--orange'>
                <SiNewyorktimes />
              </button>
            </li>

            <li>
              <p>New York Times Wirecutter</p>

              <button className=' btn btn--color  menu__more__btn--blue'>
                <SiNewyorktimes />
              </button>
            </li>

            <li>
              <p>The athletic</p>

              <button className=' btn'>
                <TbLetterA />
              </button>
            </li>
          </ul>
          <p className='menu__privacy'>Privacy Policy</p>
        </div>

        <div className='menu__btnGroup'>
          <button className='menu__btnGroup__btn   menu__btnGroup__btn--black'>
            {' '}
            Subscribe
          </button>
          <button className='menu__btnGroup__btn   menu__btnGroup__btn--white'>
            Log in
          </button>
        </div>
      </nav>
    );
};
