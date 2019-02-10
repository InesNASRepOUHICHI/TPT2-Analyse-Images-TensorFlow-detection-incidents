import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User, Vehicule } from '@app/_models';
import { VehiculeService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'vehicules.component.html' })
export class VehiculesComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    vehicules: Vehicule[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private vehiculeService: VehiculeService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.loadAllVehicules();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteVehicule(id: number) {
        this.vehiculeService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllVehicules()
        });
    }

    private loadAllVehicules() {
        this.vehiculeService.getAll().pipe(first()).subscribe(vehicules => {
            this.vehicules = vehicules;
        });
    }
}