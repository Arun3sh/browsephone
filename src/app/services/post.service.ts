import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://raw.githubusercontent.com/nambirajan-goxai/phone-api/main/galaxy.json'
  constructor(private httpclient: HttpClient) { }

  getData(){
    return this.httpclient.get(this.url)
  }
}
