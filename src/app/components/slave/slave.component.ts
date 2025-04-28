import { Component, inject } from '@angular/core';
import { ComService } from '../../services/com/com.service';

@Component({
  selector: 'app-slave',
  imports: [],
  templateUrl: './slave.component.html',
  styleUrl: './slave.component.scss'
})
export class SlaveComponent {
comService = inject(ComService);
}
