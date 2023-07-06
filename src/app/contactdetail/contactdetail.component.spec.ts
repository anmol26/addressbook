import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdetailComponent } from './contactdetail.component';

describe('ContactdetailComponent', () => {
  let component: ContactdetailComponent;
  let fixture: ComponentFixture<ContactdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactdetailComponent]
    });
    fixture = TestBed.createComponent(ContactdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
