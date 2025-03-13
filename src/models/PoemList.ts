import { PoemRecord } from "./Poem";

export interface PoemGroup {
  tag: string;
  items: PoemRecord[];
}

export interface PoemListRecord {
  $type: string;
  listTitle: string;
  listDescription?: string;
  groups: PoemGroup[];
  createdAt: string;
  [k: string]: unknown;
}

export function isPoemListRecord(v: unknown): v is PoemListRecord {
  if (typeof v !== "object" || v === null) return false;
  const obj = v as any;
  if (obj.$type !== "uk.ewancroft.anthology.list") return false;
  if (typeof obj.listTitle !== "string" || typeof obj.createdAt !== "string")
    return false;
  if (!Array.isArray(obj.groups)) return false;
  for (const group of obj.groups) {
    if (typeof group.tag !== "string" || !Array.isArray(group.items))
      return false;
  }
  return true;
}
