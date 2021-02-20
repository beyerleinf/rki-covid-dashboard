import { TranslationDefinition } from 'translate-object-loader';

export const sharedTranslations: TranslationDefinition = {
  de: {
    common: {
      languages: {
        german: 'Deutsch',
        english: 'Englisch',
      },
      pages: {
        germany: 'Deutschland',
        states: 'Bundesländer',
        districts: 'Landkreise',
        vaccinations: 'Impfungen',
      },
      cases: 'Fälle',
      deaths: 'Todesfälles',
      recovered: 'Gensen',
      weekIncidence: '7-Tage-Inidenz',
      casesPerWeek: '7-Tage-Fallzahl',
      casesPer100k: 'Fälle / 100.000 Einwohner',
      firstLockdown: 'Erster Lockdown',
      secondLockdown: 'Zweiter Lockdown',
    },
  },
  en: {
    common: {
      languages: {
        german: 'German',
        english: 'English',
      },
      pages: {
        germany: 'Germany',
        states: 'States',
        districts: 'Districts',
        vaccinations: 'Vaccinations',
      },
      cases: 'Cases',
      deaths: 'Deaths',
      recovered: 'Recovered',
      weekIncidence: 'Week incidence',
      casesPerWeek: 'Cases per week',
      casesPer100k: 'Cases per 100,000 residents',
      firstLockdown: 'First Lockdown',
      secondLockdown: 'Second Lockdown',
    },
  },
};
