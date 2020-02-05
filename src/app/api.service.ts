import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {this.results = []; }
  apiRoot: string = "https://itunes.apple.com/search";
  results: []
  API_KEY = 'YOUR_API_KEY';
  
  public getNews(){
    let username : string = 'angiey';
    let password : string = 'Rmit19891212';
    let headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    //  return this.http.jsonp(`https://itunes.apple.com/search?term=apple&media=music&limit=20`, "callback");
     return this.http.get(`https://sit2.myfuture.edu.au/api/course/searchOption?api_key=course`, {
       headers: {
        "Authorization":  "Basic " + btoa(username + ":" + password)
       }
     });
  }
  search(term: string) {
  //   return new Promise((resolve, reject) => {
  //     this.results = [];
  //     // let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
  //     let apiURL = `https://sit2.myfuture.edu.au/api/course/searchOption?api_key=course`
  //     this.http
  //       .jsonp(apiURL, "callback")
  //       .toPromise()
  //       .then(
  //         res => {
  //           // Success
  //           // this.results = res.results.map(item => {
  //           //   return new SearchItem(
  //           //     item.trackName,
  //           //     item.artistName,
  //           //     item.trackViewUrl,
  //           //     item.artworkUrl30,
  //           //     item.artistId
  //           //   );
  //           // });
  //           console.log(res)
  //           resolve();
  //         },
  //         msg => {
  //           // Error
  //           reject(msg);
  //         }
  //       );
  //   });
  }

}
