import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedditService } from './services/reddit/reddit.service';
import { Post } from './model/post';
import { MasterComponent } from "./components/master/master.component";
import { SlaveComponent } from "./components/slave/slave.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterComponent, SlaveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
// redditServ = inject(RedditService)
posts: Post[] = [];

constructor(private redditServ: RedditService) {
  this.redditServ.getData()
  .subscribe({
    next: data => this.posts = data,     
    error: err => console.log(err)
    
  })
  
}

}
