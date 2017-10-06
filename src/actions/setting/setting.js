import React from 'react';

import {
  SET_LANGUAGE,
  SET_THEME,
  GET_LANGUAGE,
  GET_THEME
} from '../types';

import langs from '../../config/langs';

export const setLanguage = (value) => {
  if(value == "en") {
    langs.setLanguage('en')
  } else if(value == "vn") {
    langs.setLanguage('vn')
  }

  localStorage.setItem('language', value);

  return {
    type: SET_LANGUAGE,
    payload: value
  }
}

export const setTheme = (value) => {
  localStorage.setItem('theme', value);

  return {
    type: SET_THEME,
    payload: value
  }
}

export const getInitial = () => {
  return (dispatch) => {
    const lang = localStorage.getItem('language');
    const theme = localStorage.getItem('theme');

    if(lang) {
      dispatch(getLangs(lang))
    }
    
    if(theme) {
      dispatch(getThemes(theme))
    }
  }
}

export const getLangs = (value) => {
  return {
    type: GET_LANGUAGE,
    payload: value
  }
}

export const getThemes = (value) => {
  return {
    type: GET_THEME,
    payload: value
  }
}
