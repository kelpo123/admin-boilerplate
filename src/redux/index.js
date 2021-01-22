import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "redux/reducers/index";
import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger();
const composeEnhancers = compose;
const persistConfig = {
   key: "root",
   storage,
   whitelist: ["auth"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let middleware = [];
if (process.env.NODE_ENV === "development") {
   middleware = [thunkMiddleware, loggerMiddleware];
} else {
   middleware = [thunkMiddleware];
}
export const store = createStore(
   persistedReducer,
   composeEnhancers(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
