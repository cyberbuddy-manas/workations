import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkationsTableComponent } from './components/workations-table/workations-table.component';
import { WorkationsService } from './data/workations.service';

@Component({
  standalone: true,
  selector: 'app-workations-page',
  imports: [CommonModule, WorkationsTableComponent],
  templateUrl: './workations.page.html',
  styleUrl: './workations.page.css',
  providers: [WorkationsService],
})
export class WorkationsPage {
  constructor(public readonly svc: WorkationsService) {}
}
