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


  changeSbj() {
    const newString = 'normalSubject' + Date.now();
    this.comService.sbj.next(newString)
    }

  changeBesbj() {
    const newString = 'behaviorSubject' + Date.now();
    this.comService.besbj.next(newString)
    }

    changeResbj() {
      const newString = 'replaySubject' + Date.now();
      this.comService.resbj.next(newString)
    }
   
}
