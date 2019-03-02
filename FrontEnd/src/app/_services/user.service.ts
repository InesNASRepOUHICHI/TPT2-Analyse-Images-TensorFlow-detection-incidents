import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`http://localhost:4000/users/`);
    }

    getById(id: string) {
        return this.http.get(`http://localhost:4000/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`http://localhost:4000/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`http://localhost:4000/users/${user._id}`, user);
    }

    delete(id: string) {
        return this.http.delete(`http://localhost:4000/users/${id}`);
    }
}