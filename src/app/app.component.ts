import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'addressbook';
  contacts: Contact[] = [];
  constructor() {
    this.contacts = this.ContactList;
  }
  ContactList: Contact[] = [
    {
      id: 1,
      name: "Anmol Khandelwal",
      email: "anmol.k@technovert.com",
      mobile: "+91 1234567890",
      landline: "234234",
      website: "www.anmol.com",
      address: "Mathura"
    },
    {
      id: 2,
      name: "Suresh Ventrapati",
      email: "suresh.v@technovert.com",
      mobile: "+91 5678903455",
      landline: "123432",
      website: "www.suresh.com",
      address: "Agra"
    },
    {
      id: 3,
      name: "Bhagavan Muddana",
      email: "bhagavan.m@technovert.com",
      mobile: "+91 789067546",
      landline: "988764",
      website: "www.bhagavan.com",
      address: "Varanasi"
    },
    {
      id: 4,
      name: "Vaibhav Nagvenkar",
      email: "vaibhav.n@technovert.com",
      mobile: "+91 2567223890",
      landline: "564234",
      website: "www.vaibhav.com",
      address: "Lucknow"
    },
      ];

}
