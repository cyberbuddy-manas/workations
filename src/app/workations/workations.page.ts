import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkationsTableComponent } from './components/workations-table/workations-table.component';
import { WorkationsService } from './services/workations.service';

@Component({
  standalone: true,
  selector: 'app-workations-page',
  imports: [CommonModule, WorkationsTableComponent],
  templateUrl: './workations.page.html',
  styleUrl: './workations.page.css',
  providers: [WorkationsService],
})
export class WorkationsPage {
  private readonly svc = inject(WorkationsService);
  workations$ = this.svc.getRows();
}
