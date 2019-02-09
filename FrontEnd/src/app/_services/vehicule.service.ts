import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicule } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class VehiculeService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Vehicule[]>(`http://localhost:4000/vehicules/`);
    }

    getById(id: number) {
        return this.http.get(`http://localhost:4000/vehicules/${id}`);
    }

    register(vehicule: Vehicule) {
        return this.http.post(`http://localhost:4000/vehicules/register`, vehicule);
    }

    update(vehicule: Vehicule) {
        return this.http.put(`http://localhost:4000/vehicules/${vehicule.id}`, vehicule);
    }

    delete(id: number) {
        return this.http.delete(`http://localhost:4000/vehicules/${id}`);
    }
}