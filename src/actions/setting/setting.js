import {
  SET_LANGUAGE,
  SET_THEME
} from '../types';

import langs from '../../config/langs';

export const setLanguage = (value) => {
  if(value == "en") {
    langs.setLanguage('en')
  } else if(value == "vn") {
    langs.setLanguage('vn')
  }

  return {
    type: SET_LANGUAGE,
    payload: value
  }
}

export const setTheme = (value) => {
  return {
    type: SET_THEME,
    payload: value
  }
}
