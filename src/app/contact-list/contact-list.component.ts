import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [];
  Keywords: any

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private http: HttpClient) {
      this.http.get(`https://sit2.myfuture.edu.au/api/bulls-eye/learning-areas?api_key=course`, {
      // headers: {
      //   Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6ImFuZ2lleSIsIkV4cGlyZXNPbiI6IlwvRGF0ZSgxNTgwODAwNjM1ODE2KVwvIn0.ecfApcxR6rpiVrSZTBXVPOheZ256e9e1OyuJU6NZJro"
      // },
        params: {
          api_key: 'course'
        },
        observe: 'response'
      })
      .toPromise()
      .then(response => {
        console.log(response);
      })
      .catch(console.log);
      // this.route.params.subscribe(params => {
      //   console.log(params);
      //   if (params["term"]) {
      //     this.doSearch(params["term"]);
      //   }
      // });
      // this.route.params.subscribe(params => {
      //   console.log(params);
      //   if (params["term"]) {
      //     this.doSearch(params["term"]);
      //   }
      // });
     }
  // search(key) {
  //   console.log(key)
  //   this.router.navigate(["contact/" + key]);

  // }
  // doSearch(term: string) {
  //   this.contactService.Search(term).then();
  // }
  // doSearch(term: string) {
  //   this.apiService.search(term)
  //   console.log(term)
  // }

  // onSearch(term: string) {
  //   console.log(term)
  //   this.router.navigate(["contacts", { term: term }]);
  // }
  ngOnInit() {
    this.http.get('https://sit2.myfuture.edu.au/api/bulls-eye/learning-areas?api_key=course').subscribe(data => {
        console.log(data)
      })
      
	// this.contactService.getContacts().subscribe((data : any[])=>{
	// 	console.log(data);
	// 	this.contacts = data;
  //   })
    // this.apiService.getNews().subscribe(data=>(console.log(data)))
    // let username : string = 'angiey';
    // let password : string = 'Rmit19891212';
    // this.http.get(`https://sit2.myfuture.edu.au/api/course/searchOption?api_key=course`, {
    //    headers: {
    //     "Authorization":  "Basic " + btoa('angiey:Rmit19891212')
    //    }
    //  }).subscribe(data=>{console.log(data)});
  }


}
