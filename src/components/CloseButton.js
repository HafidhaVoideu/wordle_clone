import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export const CloseButton = ({ closeFunction }) => {
  return (
    <button onClick={() => closeFunction()} className='closeBtn'>
      <AiOutlineClose />
    </button>
  );
};
