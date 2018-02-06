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
      return {
        ...state,
        baseTime: action.baseTime,
        startedAt: action.now,
        stoppedAt: undefined
      };

    case STOP_TIMER:
      return {
        ...state,
        stoppedAt: action.now
      };

    case RESET_TIMER:
      return {
        ...state,
        baseTime: 0,
        startedAt: state.startedAt ? action.now : undefined,
        stoppedAt: state.stoppedAt ? action.now : undefined
      };

    default:
      return state;

  }
};
