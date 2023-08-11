import React from 'react';
import { Header } from './Header';
import { Menu } from './Menu';
import { Settings } from './Settings';
import { Statistics } from './Statistics';
import { Game } from './Game';
import '../Styles/wordle.scss';
import { Questions } from './Questions';
import { Modal } from './Modal';
import { Error } from './Error';
import { Result } from './Result';
export const Wordle = () => {
  return (
    <div className='container'>
      <Header />
      <Error />
      <Menu />
      <Game />
      <Modal />
      <Questions />
      <Statistics />
      <Settings />
      <Result />
    </div>
  );
};
