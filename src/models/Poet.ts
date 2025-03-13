import { PoemRecord } from "./Poem";

export interface PoetRecord {
  name: string;
  biography: string;
  poems: PoemRecord[];
  createdAt: string;
  [k: string]: unknown;
}

export function isPoetRecord(v: unknown): v is PoetRecord {
  if (typeof v !== "object" || v === null) return false;
  const obj = v as any;
  return (
    obj.$type === "uk.ewancroft.anthology.poet" &&
    typeof obj.name === "string" &&
    typeof obj.biography === "string" &&
    Array.isArray(obj.poems) &&
    typeof obj.createdAt === "string"
  );
}