import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isAdd: boolean;
  constructor(private shared: SharedService)
  {
    this.isAdd = false; 
  }
  onAdd()
  {
    this.shared.isAdd = true;
  }
}
