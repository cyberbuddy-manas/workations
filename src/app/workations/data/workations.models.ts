export type Risk = 'HIGH' | 'LOW' | 'NO';

export interface WorkationRow {
  workationId: string;
  employee: string;
  origin: string;
  destination: string;
  startD: string;
  endD: string;
  workingDays: number;
  risk: Risk;
}
