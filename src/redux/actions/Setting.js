import { types } from "constants/Setting";

// eslint-disable-next-line import/prefer-default-export
export function switchLanguage(locale) {
   return (dispatch) => {
      dispatch({ type: types.SWITCH_LANGUAGE, locale });
   };
}
