export const START_TIMER = "START_TIMER";
export const STOP_TIMER = "STOP_TIMER";
export const RESET_TIMER = "RESET_TIMER";

export const startTimer = () => {
  return {
    type: START_TIMER
  }
};

export const stopTimer = () => {
  return {
    type: STOP_TIMER
  }
};

export const resetTimer = () => {
  return {
    type: RESET_TIMER
  }
};
