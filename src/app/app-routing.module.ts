import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes = [
        {path: '', pathMatch: 'full', redirectTo: 'home'},
	{path: 'contacts' , component: ContactListComponent},
	// {path: 'contact/:email' , component: ContactDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
