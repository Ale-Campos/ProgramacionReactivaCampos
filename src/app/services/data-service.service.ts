import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUsers(): User[] {
    return [
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
      }
    ]
  }

}
