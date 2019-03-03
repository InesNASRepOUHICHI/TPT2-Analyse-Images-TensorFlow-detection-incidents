import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { VehiculesComponent } from './vehicules';
import { IncidentsComponent } from './incidents';
import { ListUserComponent } from './list-user';
import { EditUserComponent } from './edit-user';
import { AddUserComponent } from './add-user';
import { RegisterComponent } from './register';
import { GrdFilterPipe } from './grd-filter.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule
      
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        VehiculesComponent,
        IncidentsComponent,
        EditUserComponent,
        AddUserComponent,
        ListUserComponent,
        GrdFilterPipe
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }