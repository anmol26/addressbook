import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent {
  selectedContact: Contact | undefined;
  constructor(public contact: ContactComponent)
  {
    this.selectedContact = this.contact?.selectedContact ;
  }
}
