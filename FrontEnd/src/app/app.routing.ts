import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { VehiculesComponent } from './vehicules';
import { IncidentsComponent } from './incidents';
import { ListUserComponent } from './list-user';
import { EditUserComponent } from './edit-user';
import { AddUserComponent } from './add-user';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'vehicules', component: VehiculesComponent },
    { path: 'incidents', component: IncidentsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'users', component: ListUserComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'edit-user', component: EditUserComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);