import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Contact } from '../contact';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  alldetails : Contact[] ;
  selectedContact: Contact ;
  //isEdit: boolean;
  // isAdd: boolean;
  get isEdit(): boolean{
    return this.shared.isEdit;
  }

  get isAdd(): boolean {
    return this.shared.isAdd;
  }

    constructor(public appcomponent : AppComponent, public shared: SharedService)
    {
        this.alldetails = appcomponent.ContactList;
        //this.isEdit = false;
        //this.isAdd = shared.isAdd;
        this.selectedContact = this.alldetails[0];
    }
    onSelectedContact( contact: Contact)
    {
      this.selectedContact = contact;
      //this.isEdit = false;
      this.shared.isEdit = false;
      //this.isAdd = false;
      this.shared.isAdd = false;
    }
    onDelete( id :number)
    {
      const index = this.alldetails?.findIndex(contact => contact.id === id);
      if (index !== -1) {
      this.alldetails?.splice(Number(index), 1);
      this.selectedContact = this.alldetails[0]
    }}
    onEdit(id :number)
    {
      const index = this.alldetails?.findIndex(contact => contact.id === id);
      //this.isEdit= true;
      this.shared.isEdit = true;
    }
}
