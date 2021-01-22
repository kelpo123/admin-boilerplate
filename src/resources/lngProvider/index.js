import { addLocaleData } from 'react-intl';

import enLang from 'resources/lngProvider/entries/en-US';
import idLang from 'resources/lngProvider/entries/id-ID';

const AppLocale = {
  en: enLang,
  id: idLang,
};

addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.id.data);

export default AppLocale;
