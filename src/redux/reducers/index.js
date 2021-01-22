import { combineReducers } from "redux";
import auth from "redux/reducers/Auth";
import setting from "redux/reducers/Setting";

export default combineReducers({
   auth,
   setting
});
