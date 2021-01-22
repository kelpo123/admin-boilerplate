import Cookies from "universal-cookie";
import moment from "moment";
const { REACT_APP_DOMAIN_COOKIES } = process.env;
export const COOKIES = {
   ACCESS_TOKEN: "_rat"
};
export const getAccessToken = () => {
   const cookies = new Cookies();
   return cookies.get(COOKIES.ACCESS_TOKEN);
};
export const setTokenToCookies = (res) => {
   const cookies = new Cookies();
   const { token, expired_at } = res;
   const expire = moment(expired_at).toDate();
   cookies.set(COOKIES.ACCESS_TOKEN, token, {
      path: "/",
      expires: expire,
      domain: REACT_APP_DOMAIN_COOKIES
   });
};
export const removeTokenFromCookies = () => {
   const cookies = new Cookies();
   cookies.remove(COOKIES.ACCESS_TOKEN, {
      path: "/",
      domain: REACT_APP_DOMAIN_COOKIES
   });
};
