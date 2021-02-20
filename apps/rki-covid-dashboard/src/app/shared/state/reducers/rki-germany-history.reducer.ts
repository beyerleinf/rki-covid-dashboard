import { createReducer, on } from '@ngrx/store';
import { RkiGermanyCaseHistory, RkiGermanyDeathHistory, RkiGermanyRecoveredHistory } from '@rkicovid/rki-models';
import { rkiGermanyCaseHistoryLoaded, rkiGermanyDeathHistoryLoaded } from '../actions';
import { rkiGermanyRecoveredHistoryLoaded } from '../actions/rki-germany-history.actions';

const initial: RkiGermanyCaseHistory | RkiGermanyDeathHistory | RkiGermanyRecoveredHistory = {
  data: [],
  meta: {
    contact: '',
    info: '',
    lastCheckedForUpdate: new Date(0),
    lastUpdate: new Date(0),
    source: '',
  },
};

export const rkiGermanyCaseHistoryReducer = createReducer(
  { germanyCaseHistory: initial, isLoading: true },
  on(rkiGermanyCaseHistoryLoaded, (state, { germanyCaseHistory }) => ({ germanyCaseHistory, isLoading: false }))
);

export const rkiGermanyDeathHistoryReducer = createReducer(
  { germanyDeathHistory: initial, isLoading: true },
  on(rkiGermanyDeathHistoryLoaded, (state, { germanyDeathHistory }) => ({ germanyDeathHistory, isLoading: false }))
);

export const rkiGermanyRecoveredHistoryReducer = createReducer(
  { germanyRecoveredHistory: initial, isLoading: true },
  on(rkiGermanyRecoveredHistoryLoaded, (state, { germanyRecoveredHistory }) => ({
    germanyRecoveredHistory,
    isLoading: false,
  }))
);
