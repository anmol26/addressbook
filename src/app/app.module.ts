import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactformModule } from './contactform/contactform.module';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ContactdetailComponent,
        ContactComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ContactformModule
    ]
})
export class AppModule { }
