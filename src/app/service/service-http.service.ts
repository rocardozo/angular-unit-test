import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {

  public users: any;
  private url: string;

  constructor(private http: HttpClient) { 

    this.url = 'https://jsonplaceholder.typicode.com/users';
    this.users = [];
  }

  public getUser(): void {
    this.getUserFromApi().subscribe(
      resp => {
        this.users = resp
      },
      error => {
        this.users = undefined
      }
    );
  }

  private getUserFromApi(): Observable<any> {
    return this.http.get(this.url);
  }
}
