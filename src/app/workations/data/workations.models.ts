export type Risk = 'HIGH' | 'LOW' | 'NO';

export interface WorkationRow {
  workationId: string;
  employee: string;
  origin: string;
  destination: string;
  start: string;
  end: string;
  workingDays: number;
  risk: Risk;
}
