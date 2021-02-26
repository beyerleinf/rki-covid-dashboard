import { createAction, props } from '@ngrx/store';
import { RkiVaccinations } from '@rkicovid/rki-models';
import { RKI_VACCINATIONS_LOADED } from '../ngrx-constants';

export const rkiVaccinationsLoaded = createAction(RKI_VACCINATIONS_LOADED, props<{ vaccinations: RkiVaccinations }>());
