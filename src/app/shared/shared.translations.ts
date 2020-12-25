import { TranslationDefinition } from 'translate-object-loader';

export const sharedTranslations: TranslationDefinition = {
  de: {
    common: {
      dataFrom: 'Daten von:',
      cases: 'Fälle Insgesamt',
      recovered: 'Genesene Insgesamt',
      deaths: 'Todesfälle Insgesamt',
      // total: 'Insgesamt',
      weekIncidence: '7-Tage-Inzidenz',
      casesPerWeek: '7-Tage-Fallzahl',
    },
  },
  en: {
    common: {
      dataFrom: 'Data from: ',
      cases: 'Total Cases',
      recovered: 'Total Recovered',
      deaths: 'Total Deaths',
      // total: 'Total',
      weekIncidence: '7 day incidence',
      casesPerWeek: 'Cases per week',
    },
  },
};
