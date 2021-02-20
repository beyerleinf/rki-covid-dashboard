import {
  RkiGermany,
  RkiGermanyCaseHistory,
  RkiGermanyDeathHistory,
  RkiGermanyRecoveredHistory,
} from '@rkicovid/rki-models';

export interface AppState {
  germany: { germany: RkiGermany; isLoading: boolean };
  germanyCaseHistory: { germanyCaseHistory: RkiGermanyCaseHistory; isLoading: boolean };
  germanyDeathHistory: { germanyDeathHistory: RkiGermanyDeathHistory; isLoading: boolean };
  germanyRecoveredHistory: { germanyRecoveredHistory: RkiGermanyRecoveredHistory; isLoading: boolean };
}
