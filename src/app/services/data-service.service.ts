import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private users$ = new BehaviorSubject<User[]>([]);
  users: User[] = [
    {
      username: "AleCampos",
      name: "Alejandro",
      email: "alecampos@test.com",
      age: 21
    },
    {
      username: "ClaudioCampos",
      name: "Claudio",
      email: "claudiocampos@test.com",
      age: 53
    },
    {
      username: "MarielaSalto",
      name: "Mariela",
      email: "marielasalto@test.com",
      age: 53
    },
    {
      username: "MelinaPerez",
      name: "Melina",
      email: "melinaperez@test.com",
      age: 45
    },
    {
      username: "AlejoSchmidt",
      name: "Alejo",
      email: "alejoschmidt@test.com",
      age: 21
    }
  ]


  loadUsers(): void {
    this.users$.next(this.users);
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }

}
