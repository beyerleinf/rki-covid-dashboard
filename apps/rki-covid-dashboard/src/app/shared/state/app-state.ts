import {
  RkiGermany,
  RkiGermanyCaseHistory,
  RkiGermanyDeathHistory,
  RkiGermanyRecoveredHistory,
  RkiVaccinations,
} from '@rkicovid/rki-models';

export interface AppState {
  germany: { germany: RkiGermany; isLoading: boolean };
  germanyCaseHistory: { germanyCaseHistory: RkiGermanyCaseHistory; isLoading: boolean };
  germanyCaseHistoryMean: {
    germanyCaseHistoryMean: Array<{ date: Date; cases: number; last: boolean }>;
    isLoading: boolean;
  };
  germanyDeathHistory: { germanyDeathHistory: RkiGermanyDeathHistory; isLoading: boolean };
  germanyRecoveredHistory: { germanyRecoveredHistory: RkiGermanyRecoveredHistory; isLoading: boolean };
  vaccinations: { vaccinations: RkiVaccinations; isLoading: boolean };
}
