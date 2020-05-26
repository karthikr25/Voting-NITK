import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class GeneralService {

  //private posts: Post[] = [];
  //private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient){}

  increaseCount(pickedPerson: string, post: string){
    console.log("Inside Increase count");
      const data = {post: post, name: pickedPerson};
      const temp = post;
      //this.http.get<{message:string}>('http://localhost:3000/api/cr-elections'+ branch);
      this.http.patch<{message:string}>('http://localhost:3000/api/general-elections/'+ temp, data)
        .subscribe((response) => {
          console.log(response);
        });
      /*this.http.get<{message:string}>('http://localhost:3000/api/cr-elections/'+ temp)
        .subscribe((response) => {
          console.log(response);
        });  */
  }
}
