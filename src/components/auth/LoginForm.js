import React, { memo } from "react";
import PropTypes from "prop-types";
import flatten from "flat";
import { IntlProvider } from "react-intl";
import { ConfigProvider } from "antd";

import AppLocale from "resources/lngProvider";

const LoginForm = memo(function LoginForm(props) {
   const { setting } = props;

   const currentAppLocale = AppLocale[setting.locale.locale];
   return (
      <ConfigProvider
         locale={currentAppLocale.antd}
         messages={flatten(currentAppLocale.messages)}
      >
         <IntlProvider locale={currentAppLocale.locale}>
            <div>Login</div>
         </IntlProvider>
      </ConfigProvider>
   );
});

LoginForm.propTypes = {
   auth: PropTypes.object.isRequired,
   setting: PropTypes.object.isRequired
};

export default LoginForm;
