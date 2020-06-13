import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, buffer } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RepoService {
  private client_id = 'f683347d849fab5c7eae';
  private client_secret='b4e681feafc8da66a2bd7376f323655374c83a39';

  constructor(private http:HttpClient) { }

  getAllRepo(userName, page:number =  1, perPage:number = 5){
    console.log(userName, page, perPage);

    return this.http.get('https://api.github.com/users/'+ userName+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret + '&page='+ page+'&per_page='+ perPage )
  }

  getUser(userName){
    return this.http
      .get('https://api.github.com/users/' + userName + '?client_id='+this.client_id+'&client_secret=' )
  }
}
