import {
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
} from '../actions';

import settings from '../config';

export default function timerData(state=settings.initialStates.timerData, action) {

  let functionName = 'timerData';

  switch(action.type) {

    case START_TIMER:
      return state;

    case START_TIMER:
      return state;

    case START_TIMER:
      return state;

    default:
      return state;

  }
};
