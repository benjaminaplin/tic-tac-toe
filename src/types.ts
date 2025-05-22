
export type EmptySquareValue = null;
export type SquareValue = 'x' | 'o' | null;
export type SquareOptions = SquareValue | EmptySquareValue;
export type User = Record<string, SquareValue>
