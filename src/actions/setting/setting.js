import {
  SET_LANGUAGE
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
