import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedditService } from './services/reddit/reddit.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
// redditServ = inject(RedditService)

constructor(private redditServ: RedditService) {
  this.redditServ.getData()
  .subscribe({
    next: data => console.log(data),     
    error: err => console.log(err)
    
  })
  
}

}
