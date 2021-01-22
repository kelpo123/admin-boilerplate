import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./resources/style/style.less";
import "./resources/style/util.scss";
import { createBrowserHistory } from "history";
import { persistor, store } from "redux/index";
import { PersistGate } from "redux-persist/integration/react";
import loading from "./SplashScreen";

const history = createBrowserHistory();

const Login = React.lazy(
   () =>
      new Promise((resolve) =>
         setTimeout(() => resolve(import("containers/auth/login")), 1000)
      )
);
const Page404 = React.lazy(
   () =>
      new Promise((resolve) =>
         setTimeout(() => resolve(import("containers/page404/page404")), 1200)
      )
);
const TheLayout = React.lazy(
   () =>
      new Promise((resolve) =>
         setTimeout(() => resolve(import("components/layout/TheLayout")), 1200)
      )
);

function App() {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <React.Suspense fallback={loading} minDuration={2000}>
               <Router history={history}>
                  <Switch>
                     <Route
                        path="/login"
                        name="Login"
                        render={(props) => <Login {...props} />}
                     />
                     <Route
                        path="/"
                        name="Home"
                        render={(props) => <TheLayout {...props} />}
                     />
                     <Route
                        path="*"
                        name="Page 404"
                        render={(props) => <Page404 {...props} />}
                     />
                  </Switch>
               </Router>
            </React.Suspense>
         </PersistGate>
      </Provider>
   );
}

export default App;
