import { types } from 'constants/Setting';
import localStorage from 'localStorage';

import { LANG_KEY } from 'constants/Data';
import languageData from 'resources/lngProvider/languageData';
import { decrypt } from 'helpers/Crypto';

const locale = decrypt(localStorage.getItem(LANG_KEY));

const initialState = {
  setting: {
    locale:
      locale !== null &&
      Object.keys(locale).length > 0 &&
      locale.constructor === Object
        ? locale
        : languageData[process.env.REACT_APP_LANG === 'id' ? 1 : 0],
  },
};

const setting = (state = initialState.setting, action) => {
  switch (action.type) {
    case types.SWITCH_LANGUAGE:
      return {
        ...state,
        locale: action.locale,
      };
    default:
      return state;
  }
};

export default setting;
