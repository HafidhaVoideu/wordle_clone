import React from 'react';

export const Cell = ({ letter, color }) => {
  return <button className={`cell letter--${color}`}>{letter}</button>;
};
