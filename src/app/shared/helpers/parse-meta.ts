import { RkiMeta, RkiMetaRaw } from '../models';

export function parseMeta(meta: RkiMetaRaw): RkiMeta {
  return {
    ...meta,
    lastUpdate: new Date(meta.lastUpdate),
    lastCheckedForUpdate: new Date(meta.lastCheckedForUpdate),
  };
}
