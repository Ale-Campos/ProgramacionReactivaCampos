import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor() {}

  @Input() dataSource!: User[];
  displayedColumns: string[] = ['name', 'username', 'email', 'age'];
  

}
