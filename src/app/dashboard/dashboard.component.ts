import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { User } from '../models/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  dataSource: User[];
  constructor(private dataService: DataService) {
    this.dataSource = this.dataService.getUsers();
  }
}
