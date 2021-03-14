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
      casesMean: 'Fälle (Durchschnitt)',
      deaths: 'Todesfälle',
      recovered: 'Genesen',
      weekIncidence: '7-Tage-Inzidenz',
      casesPerWeek: '7-Tage-Fallzahl',
      casesPer100k: 'Fälle / 100.000 Einwohner',
      firstLockdown: 'Erster Lockdown',
      secondLockdown: 'Zweiter Lockdown',
      history: 'Historie',
      source: 'Quelle',
      lastUpdate: 'Zuletzt aktualisiert',
      lastCheckedForUpdates: 'Zuletzt auf Updates überprüft',
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
      casesMean: 'Cases (mean average)',
      deaths: 'Deaths',
      recovered: 'Recovered',
      weekIncidence: 'Week incidence',
      casesPerWeek: 'Cases per week',
      casesPer100k: 'Cases per 100,000 residents',
      firstLockdown: 'First Lockdown',
      secondLockdown: 'Second Lockdown',
      history: 'History',
      source: 'Source',
      lastUpdate: 'Last update',
      lastCheckedForUpdates: 'Last checked for updates',
    },
  },
};
