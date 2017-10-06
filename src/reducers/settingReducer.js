import {
  SET_LANGUAGE,
  SET_THEME,
  GET_LANGUAGE,
  GET_THEME
} from '../actions/types';

const INITIAL = {
  language: 'en',
  theme: 'dark'
}

const settingReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      }
    case GET_LANGUAGE:  
      return {
        ...state,
        language: action.payload
      }
    case GET_THEME:  
    return {
      ...state,
      theme: action.payload
    }  
    default:
      return state
  }
}

export default settingReducer;
