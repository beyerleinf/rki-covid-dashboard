import { TranslationDefinition } from 'translate-object-loader';

export const sharedTranslations: TranslationDefinition = {
  de: {
    common: {
      dataFrom: 'Daten von:',
      cases: 'Fälle Insgesamt',
      recovered: 'Genesene Insgesamt',
      deaths: 'Todesfälle Insgesamt',
      weekIncidence: '7-Tage-Inzidenz',
      casesPerWeek: '7-Tage-Fallzahl',
      casesPer100k: 'Fälle / 100.000 Einwohner',
      casesState: 'Fälle für {{state}}',
      deathsState: 'Todesfälle für {{state}}',
      weekIncidenceState: '7-Tage-Inzidenz für {{state}}',
      casesPer100kState: 'Fälle / 100.000 Einwohner für {{state}}',
    },
  },
  en: {
    common: {
      dataFrom: 'Data from: ',
      cases: 'Total Cases',
      recovered: 'Total Recovered',
      deaths: 'Total Deaths',
      weekIncidence: '7 day incidence',
      casesPerWeek: 'Cases per week',
      casesPer100k: 'Cases / 100,000 residents',
    },
  },
};
