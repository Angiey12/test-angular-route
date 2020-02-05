import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  key
  result
  contact: any;
  contacts_2
  constructor(private contactService: ContactService, private route: ActivatedRoute, private http: HttpClient,) { }

  ngOnInit() {
    // this.key = ""
    // this.result = ""
    // this.route.paramMap.subscribe(params => {
    // console.log(params.get('email'))
    // this.key = params.get('email')
    // console.log(this.key)
    // this.http.get('./contacts.json').subscribe(data=>{
    //   this.contacts_2 = data
    //   console.log(this.contacts_2)
    //   this.result = this.contacts_2.indexOf(this.key)
    //   console.log(this.result)
    //   // for (var i=0; i<=this.contacts_2.length; i++){
    //   //   console.log(this.contacts_2[i])
    //   //   if (this.contacts_2[i].email )
    //   // }
    // })
 	  // // this.contactService.getContact(params.get('email')).subscribe(c =>{
		// // console.log(c);
		// // this.contact = c;
    // // })   
    // });
 	
  }

}
