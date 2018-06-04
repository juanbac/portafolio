import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AmGridUserDataSource } from './am-grid-user-datasource';

@Component({
  selector: 'am-grid-user',
  templateUrl: './am-grid-user.component.html',
  styleUrls: ['./am-grid-user.component.css']
})
export class AmGridUserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AmGridUserDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new AmGridUserDataSource(this.paginator, this.sort);
  }
}
