import { Injectable } from '@angular/core';
import { WORKATIONS_SEED } from './workations.seed';
import { WorkationRow } from './workations.models';

@Injectable()
export class WorkationsService {
  getRows(): WorkationRow[] {
    return WORKATIONS_SEED;
  }
}
