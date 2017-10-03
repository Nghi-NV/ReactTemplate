import {
  SET_LANGUAGE
} from '../actions/types';

const INITIAL = {
  language: 'en'
}

const settingReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state
  }
}

export default settingReducer;
