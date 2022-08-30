import { RkiMeta, RkiMetaRaw } from '../models';

export const parseMeta = (meta: RkiMetaRaw): RkiMeta => ({
  ...meta,
  lastUpdate: new Date(meta.lastUpdate),
  lastCheckedForUpdate: new Date(meta.lastCheckedForUpdate),
});
