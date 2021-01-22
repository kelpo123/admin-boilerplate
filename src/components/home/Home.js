import React, { memo } from 'react';
import PropTypes from 'prop-types';
import flatten from 'flat';
import { IntlProvider } from 'react-intl';
import { ConfigProvider, Col } from 'antd';
import { Link } from 'react-router-dom';

import AppLocale from 'resources/lngProvider';
import IntlMessages from 'helpers/IntlMessages';

const Home = memo(function Home(props) {
  const { setting } = props;

  const currentAppLocale = AppLocale[setting.locale.locale];
  return (
    <ConfigProvider
      locale={currentAppLocale.antd}
      messages={flatten(currentAppLocale.messages)}
    >
      <IntlProvider locale={currentAppLocale.locale}>
        <Col justify="center" align="middle">
          <Link
            to={'/login'}
            className="ant-btn ant-btn-primary ant-btn-round ant-btn-lg"
          >
            <IntlMessages id="home.slider.title" />
          </Link>
        </Col>
      </IntlProvider>
    </ConfigProvider>
  );
});

Home.propTypes = {
  setting: PropTypes.object.isRequired,
};

export default Home;
