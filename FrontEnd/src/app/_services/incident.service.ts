import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incident } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class IncidentService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Incident[]>(`http://localhost:4000/incidents/`);
    }

    getById(id: number) {
        return this.http.get(`http://localhost:4000/incidents/${id}`);
    }

    register(incident: Incident) {
        return this.http.post(`http://localhost:4000/incidents/register`, incident);
    }

    update(incident: Incident) {
        return this.http.put(`http://localhost:4000/incidents/${incident.id}`, incident);
    }

    delete(id: number) {
        return this.http.delete(`http://localhost:4000/incidents/${id}`);
    }
}