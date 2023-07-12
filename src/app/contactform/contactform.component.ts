import { Component,  OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactComponent } from '../contact/contact.component';
import { FormBuilder, FormControl, NgForm, Validators, ReactiveFormsModule, FormGroup, FormsModule} from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit  {
  selectedContact: Contact;
  id: number;
  name: string;
  email: string;
  mobile: string;
  landline: string;
  website: string;
  address: string;
  get isAdd(): boolean {
    return this.shared.isAdd;
  }

  ngOnInit(): void {
    this.selectedContact = this.contact.selectedContact;
  }

  constructor(public contact: ContactComponent,  private fb: FormBuilder, public shared: SharedService)
  {
    this.selectedContact = this.contact.selectedContact;
    this.id = this.selectedContact.id;
    this.name = this.selectedContact.name;
    this.email= this.selectedContact.email;
    this.mobile= this.selectedContact.mobile;
    this.landline= this.selectedContact.landline;
    this.website= this.selectedContact.website;
    this.address= this.selectedContact.address;

  }

  onSubmit(f:any)
  {
    if(f.id)
    {
        this.contact.alldetails = this.contact.alldetails.map(contact => contact.id === f.id ? { ...contact, ...f } : contact);
        this.contact.selectedContact = f as Contact;
    }
    else{
     let newContact = 
      {   name: f.name,
          email: f.email,
          website: f.website,
          mobile: f.mobile,
          landline: f.landline,
          address: f.address,
          id: this.contact.alldetails[this.contact.alldetails.length-1].id + 1
      } as Contact;
      this.contact.alldetails.push(newContact);
    }
    this.shared.isAdd = false;
    this.shared.isEdit = false;
  }
  onClose()
  {
    this.shared.isAdd = false;
    this.shared.isEdit = false;

  }
}
