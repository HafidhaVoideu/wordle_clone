import React from 'react';
import { useGlobalContext } from '../context';

export const Modal = () => {
  const { isModalOpen, closeHelp, closeSettings, closeStats } =
    useGlobalContext();

  if (isModalOpen)
    return (
      <div
        onClick={() => {
          closeHelp();
          closeSettings();
          closeStats();
        }}
        className='modal'
      ></div>
    );
};
