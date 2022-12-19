export type CellTypes = 'javascript' | 'text';

export interface Cell {
  id: string;
  type: CellTypes;
  content: string;
}
