import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
 

  constructor(private http: HttpClient) { }

  getData() {
    // return fetch('https://www.reddit.com/r/ProgrammerHumor.json')
    // .then(resp => resp.json())

    return this.http.get<any>('https://www.reddit.com/r/ProgrammerHumor.json').pipe(
      map(data => data.data.children),
      map(children => children.map((child:any) => child.data))
    )
  }
}
