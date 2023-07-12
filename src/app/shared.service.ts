import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  public isAdd: boolean = false;
  public isEdit: boolean = false;
}
