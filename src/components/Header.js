import React from 'react';
import { GameName } from './GameName';
import { AiOutlineMenu, AiOutlineSetting } from 'react-icons/ai';
import { ImStatsBars2 } from 'react-icons/im';

import { BiHelpCircle } from 'react-icons/bi';
import { useGlobalContext } from '../context';
export const Header = () => {
  const { openMenu, openHelp, openStats, openSettings } = useGlobalContext();
  return (
    <header className='header'>
      <button onClick={() => openMenu()} className='header__menu'>
        <AiOutlineMenu />
      </button>
      <GameName />
      <div className='header__icons'>
        <button onClick={() => openStats()} className='header__icons__icon'>
          <ImStatsBars2 />
        </button>
        <button onClick={() => openSettings()} className='header__icons__icon'>
          <AiOutlineSetting />
        </button>
        <button onClick={() => openHelp()} className='header__icons__icon'>
          <BiHelpCircle />
        </button>
      </div>
    </header>
  );
};
