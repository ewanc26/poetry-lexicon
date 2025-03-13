export interface PoemListItemRecord {
  $type: string;
  poem: string;
  list: string;
  createdAt: string;
  [k: string]: unknown;
}

export function isPoemListItemRecord(v: unknown): v is PoemListItemRecord {
  if (typeof v !== "object" || v === null) return false;
  const obj = v as any;
  return (
    obj.$type === "uk.ewancroft.anthology.listitem" &&
    typeof obj.poem === "string" &&
    typeof obj.list === "string" &&
    typeof obj.createdAt === "string"
  );
}