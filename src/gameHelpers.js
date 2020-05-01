export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// Function that will render an array of arrays
// this will represente the game area
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
