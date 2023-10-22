import { Component, Input } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { User } from '../models/User';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
   filtro: boolean= true;
  
  dataSource: Observable<User[]> = new Observable<User[]>
  constructor(private dataService: DataService) {
    this.dataService.loadUsers()
    // this.dataService.getUsers().subscribe({
    //   next: (value) => {
    //     this.dataSource = value;
    //   }
    // });
    this.setDataSource()
  }

  setDataSource(): void {
    this.filtro = !this.filtro
    this.dataSource = this.filtro? this.dataService.getUsers()
  .pipe(
    map((value) => {
        return value.filter(value => value.age >50)
    })
  ): this.dataService.getUsers();
  } 
}
