import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-badge',
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent {
  public readonly value = input.required<string>();
  public readonly risk = input.required<'HIGH' | 'LOW' | 'NO'>();

  get cls(): string {
    if (this.risk() === 'HIGH') return 'high';
    if (this.risk() === 'LOW') return 'low';
    return 'no';
  }
}
