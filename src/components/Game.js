import React from "react";
import { WordGrid } from "./WordGrid";
import { Letters } from "./Letters";

export const Game = () => {
  return (
    <div className="gameContainer">
      <WordGrid />
      <Letters />
    </div>
  );
};
