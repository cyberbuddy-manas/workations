// src/app/shared/types/sort.ts
export type SortDir = 'asc' | 'desc';
export type SortState<T extends string> = { key: T; dir: SortDir } | null;

export const toggleSort = <T extends string>(
  current: SortState<T>,
  key: T
): SortState<T> => {
  if (!current || current.key !== key) return { key, dir: 'asc' };
  if (current.dir === 'asc') return { key, dir: 'desc' };
  return null; // third click = reset
};
