export interface PoemRecord {
  $type: string;
  licence: string;
  text: string;
  title: string;
  tags: string[];
  createdAt: string;
  [k: string]: unknown;
}

export function isPoemRecord(v: unknown): v is PoemRecord {
  if (typeof v !== "object" || v === null) return false;
  const obj = v as any;
  return (
    obj.$type === "uk.ewancroft.anthology.poem" &&
    typeof obj.licence === "string" &&
    typeof obj.text === "string" &&
    typeof obj.title === "string" &&
    Array.isArray(obj.tags) &&
    typeof obj.createdAt === "string"
  );
}
