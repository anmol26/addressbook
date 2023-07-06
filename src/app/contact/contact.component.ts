import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  alldetails : Contact[] | undefined;
  selectedContact: Contact | undefined;
  isEdit: boolean;
    constructor(public appcomponent : AppComponent)
    {
        this.alldetails = appcomponent.ContactList;
        this.isEdit = false;
    }
    onSelectedContact( contact: Contact)
    {
      this.selectedContact = contact;
      this.isEdit = false;
    }
    onDelete( id :number)
    {
      const index = this.alldetails?.findIndex(contact => contact.id === id);
      if (index !== -1) {
      this.alldetails?.splice(Number(index), 1);
      this.selectedContact = undefined;
    }}
    onEdit(id :number)
    {
      const index = this.alldetails?.findIndex(contact => contact.id === id);
      this.isEdit= true;
    }
}
