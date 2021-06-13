import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UsersDataSource, UsersItem } from './users-datasource';

interface SearchFilter {
  value: string;
  searchValue: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<UsersItem>;
  dataSource: UsersDataSource;

  searchBar = false;
  searchFilter: SearchFilter[] = [
    { value: 'UID-0', searchValue: 'UID' },
    { value: 'box-1', searchValue: 'Box' },
    { value: 'cage-2', searchValue: 'Cage' },
    { value: 'activeStatus-3', searchValue: 'Active' },
    { value: 'admin-4', searchValue: 'Admin' },
  ];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'box', 'cage', 'active'];

  constructor() {
    this.dataSource = new UsersDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
