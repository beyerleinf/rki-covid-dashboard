import { createAction, props } from '@ngrx/store';
import { RkiGermany } from '@rkicovid/rki-models';
import { RKI_GERMANY_LOADED } from '../ngrx-constants';

export const rkiGermanyLoaded = createAction(RKI_GERMANY_LOADED, props<{ germany: RkiGermany }>());
