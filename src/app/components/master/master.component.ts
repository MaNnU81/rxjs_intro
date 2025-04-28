import { Component, inject } from '@angular/core';
import { ComService } from '../../services/com/com.service';

@Component({
  selector: 'app-master',
  imports: [],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {
  comService = inject(ComService);
}
