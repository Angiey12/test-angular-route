import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular7-router-demo';
  contacts
  articles;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private apiService: ApiService
    ) {
      // this.route.params.subscribe(params => {
      //   console.log(params);
      //   if (params["term"]) {
      //     this.doSearch(params["term"]);
      //   }
      // });
      // this.http.get('https://sit2.myfuture.edu.au/api/course/searchOption?api_key=course').subscribe((data)=>{
      //   console.log(data);
      //   // this.articles = data['articles'];
      // });
      this.route.params.subscribe(params => {
        console.log(params);
        if (params["term"]) {
          this.doSearch('apple');
        }
      });
     }
     doSearch(term: string) {
      this.apiService.search(term)
      console.log(term)
    }
  
    onSearch(term: string) {
      console.log(term)
      this.router.navigate(["contacts", { term: term }]);
    }
  // search(key) {
  //   console.log(key)
  //   this.router.navigate(["contact/" + key]);

  // }
  ngOnInit() {
    // this.http.get('./contacts.json').subscribe(data=>{
    //   this.contacts = data
    // })
    // this.apiService.search()
  }
}
