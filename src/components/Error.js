import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';

export const Error = () => {
  const { setError, isError, errorMessage } = useGlobalContext();

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setError({ isError: false, errorMessage: '' });
    }, 1500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [isError]);

  if (isError) return <div className='error'>{errorMessage}</div>;
};
