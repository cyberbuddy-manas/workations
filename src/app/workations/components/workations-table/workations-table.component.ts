// src/app/workations/components/workations-table/workations-table.component.ts
import { Component, computed, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { WorkationRow } from '../../data/workations.models';
import { flagFor, riskLabel } from '../../data/workations.utils';
import { SortState, toggleSort } from '../helpers/workations-table';

type ColKey = 'employee' | 'origin' | 'destination' | 'startD' | 'endD' | 'workingDays' | 'risk';

@Component({
  standalone: true,
  selector: 'app-workations-table',
  imports: [CommonModule, DateFormatPipe, BadgeComponent],
  templateUrl: './workations-table.component.html',
  styleUrl: './workations-table.component.css',
})
export class WorkationsTableComponent {
  public readonly rows = input.required<WorkationRow[]>();

  public readonly flagFor = flagFor;
  public readonly riskLabel = riskLabel;

  sort = signal<SortState<ColKey>>(null);

  sortedRows = computed(() => {
    const rows = [...this.rows()];
    const s = this.sort();
    if (!s) return rows;

    const dir = s.dir === 'asc' ? 1 : -1;

    const cmp = (a: WorkationRow, b: WorkationRow): number => {
      switch (s.key) {
        case 'workingDays':
          return (a.workingDays - b.workingDays) * dir;
        case 'startD':
        case 'endD':
          return a[s.key].localeCompare(b[s.key]) * dir; // ISO date sorts correctly
        case 'risk': {
          const rank = (r: WorkationRow['risk']) => (r === 'HIGH' ? 3 : r === 'LOW' ? 2 : 1);
          return (rank(a.risk) - rank(b.risk)) * dir;
        }
        default:
          return String(a[s.key]).localeCompare(String(b[s.key])) * dir;
      }
    };

    return rows.sort(cmp);
  });

  onHeaderClick(key: ColKey) {
    this.sort.set(toggleSort(this.sort(), key));
  }

  isAsc(key: ColKey) {
    const s = this.sort();
    return !!s && s.key === key && s.dir === 'asc';
  }

  isDesc(key: ColKey) {
    const s = this.sort();
    return !!s && s.key === key && s.dir === 'desc';
  }
}
