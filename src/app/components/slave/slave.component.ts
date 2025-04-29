import { Component, inject } from '@angular/core';
import { ComService } from '../../services/com/com.service';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slave',
  imports: [AsyncPipe],
  templateUrl: './slave.component.html',
  styleUrl: './slave.component.scss'
})
export class SlaveComponent {


comService = inject(ComService);

normalSubscription?: Subscription;


subscribeResbj() {
  this.comService.resbj.subscribe(data => console.log('replay subject', data));
}

subscribeBesbj() {
  this.comService.besbj.subscribe(data => console.log('behavior subject', data));
}

subscribeSbj() {
this.normalSubscription = this.comService.sbj.subscribe(data => console.log('normal subject', data));
}

unsubscribe() {
  this.normalSubscription?.unsubscribe();
  }

}
