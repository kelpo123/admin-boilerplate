import antdID from 'antd/lib/locale-provider/id_ID';
import appLocaleData from 'react-intl/locale-data/id';

import idMessages from 'resources/lngProvider/locales/id_ID.json';

const IdLang = {
  messages: {
    ...idMessages,
  },
  antd: antdID,
  locale: 'id-ID',
  data: appLocaleData,
};
export default IdLang;
