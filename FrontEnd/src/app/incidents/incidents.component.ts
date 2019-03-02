import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User, Incident } from '@app/_models';
import { IncidentService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'incidents.component.html' })
export class IncidentsComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    incidents: Incident[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private incidentService: IncidentService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.loadAllIncidents();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteIncident(id: number) {
        this.incidentService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllIncidents()
        });
    }

    private loadAllIncidents() {
        this.incidentService.getAll().pipe(first()).subscribe(incidents => {
            this.incidents = incidents;
        });
    }
}