import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface UsersItem {
  name: string;
  id: number;
  box: string;
  cage: string;
  active: boolean;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: UsersItem[] = [
  { id: 1, name: 'Hydrogen', box: 'a', cage: 'x', active: true },
  { id: 2, name: 'Helium', box: 'a', cage: 'x', active: true },
  { id: 3, name: 'Lithium', box: 'a', cage: 'x', active: true },
  { id: 4, name: 'Beryllium', box: 'a', cage: 'x', active: true },
  { id: 5, name: 'Boron', box: 'a', cage: 'x', active: true },
  { id: 6, name: 'Carbon', box: 'a', cage: 'x', active: true },
  { id: 7, name: 'Nitrogen', box: 'a', cage: 'x', active: true },
  { id: 8, name: 'Oxygen', box: 'a', cage: 'x', active: true },
  { id: 9, name: 'Fluorine', box: 'a', cage: 'x', active: true },
  { id: 10, name: 'Neon', box: 'a', cage: 'x', active: true },
  { id: 11, name: 'Sodium', box: 'a', cage: 'x', active: true },
  { id: 12, name: 'Magnesium', box: 'a', cage: 'x', active: true },
  { id: 13, name: 'Aluminum', box: 'a', cage: 'x', active: true },
  { id: 14, name: 'Silicon', box: 'a', cage: 'x', active: true },
  { id: 15, name: 'Phosphorus', box: 'a', cage: 'x', active: true },
  { id: 16, name: 'Sulfur', box: 'a', cage: 'x', active: true },
  { id: 17, name: 'Chlorine', box: 'a', cage: 'x', active: true },
  { id: 18, name: 'Argon', box: 'a', cage: 'x', active: true },
  { id: 19, name: 'Potassium', box: 'a', cage: 'x', active: true },
  { id: 20, name: 'Calcium', box: 'a', cage: 'x', active: true },
  { id: 1, name: 'Hydrogen', box: 'a', cage: 'x', active: true },
  { id: 2, name: 'Helium', box: 'a', cage: 'x', active: true },
  { id: 3, name: 'Lithium', box: 'a', cage: 'x', active: true },
  { id: 4, name: 'Beryllium', box: 'a', cage: 'x', active: true },
  { id: 5, name: 'Boron', box: 'a', cage: 'x', active: true },
  { id: 6, name: 'Carbon', box: 'a', cage: 'x', active: true },
  { id: 7, name: 'Nitrogen', box: 'a', cage: 'x', active: true },
  { id: 8, name: 'Oxygen', box: 'a', cage: 'x', active: true },
  { id: 9, name: 'Fluorine', box: 'a', cage: 'x', active: true },
  { id: 10, name: 'Neon', box: 'a', cage: 'x', active: true },
  { id: 11, name: 'Sodium', box: 'a', cage: 'x', active: true },
  { id: 12, name: 'Magnesium', box: 'a', cage: 'x', active: true },
  { id: 13, name: 'Aluminum', box: 'a', cage: 'x', active: true },
  { id: 14, name: 'Silicon', box: 'a', cage: 'x', active: true },
  { id: 15, name: 'Phosphorus', box: 'a', cage: 'x', active: true },
  { id: 16, name: 'Sulfur', box: 'a', cage: 'x', active: true },
  { id: 17, name: 'Chlorine', box: 'a', cage: 'x', active: true },
  { id: 18, name: 'Argon', box: 'a', cage: 'x', active: true },
  { id: 19, name: 'Potassium', box: 'a', cage: 'x', active: true },
  { id: 20, name: 'Calcium', box: 'a', cage: 'x', active: true },
  { id: 1, name: 'Hydrogen', box: 'a', cage: 'x', active: true },
  { id: 2, name: 'Helium', box: 'a', cage: 'x', active: true },
  { id: 3, name: 'Lithium', box: 'a', cage: 'x', active: true },
  { id: 4, name: 'Beryllium', box: 'a', cage: 'x', active: true },
  { id: 5, name: 'Boron', box: 'a', cage: 'x', active: true },
  { id: 6, name: 'Carbon', box: 'a', cage: 'x', active: true },
  { id: 7, name: 'Nitrogen', box: 'a', cage: 'x', active: true },
  { id: 8, name: 'Oxygen', box: 'a', cage: 'x', active: true },
  { id: 9, name: 'Fluorine', box: 'a', cage: 'x', active: true },
  { id: 10, name: 'Neon', box: 'a', cage: 'x', active: true },
  { id: 11, name: 'Sodium', box: 'a', cage: 'x', active: true },
  { id: 12, name: 'Magnesium', box: 'a', cage: 'x', active: true },
  { id: 13, name: 'Aluminum', box: 'a', cage: 'x', active: true },
  { id: 14, name: 'Silicon', box: 'a', cage: 'x', active: true },
  { id: 15, name: 'Phosphorus', box: 'a', cage: 'x', active: true },
  { id: 16, name: 'Sulfur', box: 'a', cage: 'x', active: true },
  { id: 17, name: 'Chlorine', box: 'a', cage: 'x', active: true },
  { id: 18, name: 'Argon', box: 'a', cage: 'x', active: true },
  { id: 19, name: 'Potassium', box: 'a', cage: 'x', active: true },
  { id: 20, name: 'Calcium', box: 'a', cage: 'x', active: true },
  { id: 1, name: 'Hydrogen', box: 'a', cage: 'x', active: true },
  { id: 2, name: 'Helium', box: 'a', cage: 'x', active: true },
  { id: 3, name: 'Lithium', box: 'a', cage: 'x', active: true },
  { id: 4, name: 'Beryllium', box: 'a', cage: 'x', active: true },
  { id: 5, name: 'Boron', box: 'a', cage: 'x', active: true },
  { id: 6, name: 'Carbon', box: 'a', cage: 'x', active: true },
  { id: 7, name: 'Nitrogen', box: 'a', cage: 'x', active: true },
  { id: 8, name: 'Oxygen', box: 'a', cage: 'x', active: true },
  { id: 9, name: 'Fluorine', box: 'a', cage: 'x', active: true },
  { id: 10, name: 'Neon', box: 'a', cage: 'x', active: true },
  { id: 11, name: 'Sodium', box: 'a', cage: 'x', active: true },
  { id: 12, name: 'Magnesium', box: 'a', cage: 'x', active: true },
  { id: 13, name: 'Aluminum', box: 'a', cage: 'x', active: true },
  { id: 14, name: 'Silicon', box: 'a', cage: 'x', active: true },
  { id: 15, name: 'Phosphorus', box: 'a', cage: 'x', active: true },
  { id: 16, name: 'Sulfur', box: 'a', cage: 'x', active: true },
  { id: 17, name: 'Chlorine', box: 'a', cage: 'x', active: true },
  { id: 18, name: 'Argon', box: 'a', cage: 'x', active: true },
  { id: 19, name: 'Potassium', box: 'a', cage: 'x', active: true },
  { id: 20, name: 'Calcium', box: 'a', cage: 'x', active: true },
  { id: 1, name: 'Hydrogen', box: 'a', cage: 'x', active: true },
  { id: 2, name: 'Helium', box: 'a', cage: 'x', active: true },
  { id: 3, name: 'Lithium', box: 'a', cage: 'x', active: true },
  { id: 4, name: 'Beryllium', box: 'a', cage: 'x', active: true },
  { id: 5, name: 'Boron', box: 'a', cage: 'x', active: true },
  { id: 6, name: 'Carbon', box: 'a', cage: 'x', active: true },
  { id: 7, name: 'Nitrogen', box: 'a', cage: 'x', active: true },
  { id: 8, name: 'Oxygen', box: 'a', cage: 'x', active: true },
  { id: 9, name: 'Fluorine', box: 'a', cage: 'x', active: true },
  { id: 10, name: 'Neon', box: 'a', cage: 'x', active: true },
  { id: 11, name: 'Sodium', box: 'a', cage: 'x', active: true },
  { id: 12, name: 'Magnesium', box: 'a', cage: 'x', active: true },
  { id: 13, name: 'Aluminum', box: 'a', cage: 'x', active: true },
  { id: 14, name: 'Silicon', box: 'a', cage: 'x', active: true },
  { id: 15, name: 'Phosphorus', box: 'a', cage: 'x', active: true },
  { id: 16, name: 'Sulfur', box: 'a', cage: 'x', active: true },
  { id: 17, name: 'Chlorine', box: 'a', cage: 'x', active: true },
  { id: 18, name: 'Argon', box: 'a', cage: 'x', active: true },
  { id: 19, name: 'Potassium', box: 'a', cage: 'x', active: true },
  { id: 20, name: 'Calcium', box: 'a', cage: 'x', active: true },
  { id: 1, name: 'Hydrogen', box: 'a', cage: 'x', active: true },
  { id: 2, name: 'Helium', box: 'a', cage: 'x', active: true },
  { id: 3, name: 'Lithium', box: 'a', cage: 'x', active: true },
  { id: 4, name: 'Beryllium', box: 'a', cage: 'x', active: true },
  { id: 5, name: 'Boron', box: 'a', cage: 'x', active: true },
  { id: 6, name: 'Carbon', box: 'a', cage: 'x', active: true },
  { id: 7, name: 'Nitrogen', box: 'a', cage: 'x', active: true },
  { id: 8, name: 'Oxygen', box: 'a', cage: 'x', active: true },
  { id: 9, name: 'Fluorine', box: 'a', cage: 'x', active: true },
  { id: 10, name: 'Neon', box: 'a', cage: 'x', active: true },
  { id: 11, name: 'Sodium', box: 'a', cage: 'x', active: true },
  { id: 12, name: 'Magnesium', box: 'a', cage: 'x', active: true },
  { id: 13, name: 'Aluminum', box: 'a', cage: 'x', active: true },
  { id: 14, name: 'Silicon', box: 'a', cage: 'x', active: true },
  { id: 15, name: 'Phosphorus', box: 'a', cage: 'x', active: true },
  { id: 16, name: 'Sulfur', box: 'a', cage: 'x', active: true },
  { id: 17, name: 'Chlorine', box: 'a', cage: 'x', active: true },
  { id: 18, name: 'Argon', box: 'a', cage: 'x', active: true },
  { id: 19, name: 'Potassium', box: 'a', cage: 'x', active: true },
  { id: 20, name: 'Calcium', box: 'a', cage: 'x', active: true },
  { id: 1, name: 'Hydrogen', box: 'a', cage: 'x', active: true },
  { id: 2, name: 'Helium', box: 'a', cage: 'x', active: true },
  { id: 3, name: 'Lithium', box: 'a', cage: 'x', active: true },
  { id: 4, name: 'Beryllium', box: 'a', cage: 'x', active: true },
  { id: 5, name: 'Boron', box: 'a', cage: 'x', active: true },
  { id: 6, name: 'Carbon', box: 'a', cage: 'x', active: true },
  { id: 7, name: 'Nitrogen', box: 'a', cage: 'x', active: true },
  { id: 8, name: 'Oxygen', box: 'a', cage: 'x', active: true },
  { id: 9, name: 'Fluorine', box: 'a', cage: 'x', active: true },
  { id: 10, name: 'Neon', box: 'a', cage: 'x', active: true },
  { id: 11, name: 'Sodium', box: 'a', cage: 'x', active: true },
  { id: 12, name: 'Magnesium', box: 'a', cage: 'x', active: true },
  { id: 13, name: 'Aluminum', box: 'a', cage: 'x', active: true },
  { id: 14, name: 'Silicon', box: 'a', cage: 'x', active: true },
  { id: 15, name: 'Phosphorus', box: 'a', cage: 'x', active: true },
  { id: 16, name: 'Sulfur', box: 'a', cage: 'x', active: true },
  { id: 17, name: 'Chlorine', box: 'a', cage: 'x', active: true },
  { id: 18, name: 'Argon', box: 'a', cage: 'x', active: true },
  { id: 19, name: 'Potassium', box: 'a', cage: 'x', active: true },
  { id: 20, name: 'Calcium', box: 'a', cage: 'x', active: true },
  { id: 1, name: 'Hydrogen', box: 'a', cage: 'x', active: true },
  { id: 2, name: 'Helium', box: 'a', cage: 'x', active: true },
  { id: 3, name: 'Lithium', box: 'a', cage: 'x', active: true },
  { id: 4, name: 'Beryllium', box: 'a', cage: 'x', active: true },
  { id: 5, name: 'Boron', box: 'a', cage: 'x', active: true },
  { id: 6, name: 'Carbon', box: 'a', cage: 'x', active: true },
  { id: 7, name: 'Nitrogen', box: 'a', cage: 'x', active: true },
  { id: 8, name: 'Oxygen', box: 'a', cage: 'x', active: true },
  { id: 9, name: 'Fluorine', box: 'a', cage: 'x', active: true },
  { id: 10, name: 'Neon', box: 'a', cage: 'x', active: true },
  { id: 11, name: 'Sodium', box: 'a', cage: 'x', active: true },
  { id: 12, name: 'Magnesium', box: 'a', cage: 'x', active: true },
  { id: 13, name: 'Aluminum', box: 'a', cage: 'x', active: true },
  { id: 14, name: 'Silicon', box: 'a', cage: 'x', active: true },
  { id: 15, name: 'Phosphorus', box: 'a', cage: 'x', active: true },
  { id: 16, name: 'Sulfur', box: 'a', cage: 'x', active: true },
  { id: 17, name: 'Chlorine', box: 'a', cage: 'x', active: true },
  { id: 18, name: 'Argon', box: 'a', cage: 'x', active: true },
  { id: 19, name: 'Potassium', box: 'a', cage: 'x', active: true },
  { id: 20, name: 'Calcium', box: 'a', cage: 'x', active: true },
  { id: 1, name: 'Hydrogen', box: 'a', cage: 'x', active: true },
  { id: 2, name: 'Helium', box: 'a', cage: 'x', active: true },
  { id: 3, name: 'Lithium', box: 'a', cage: 'x', active: true },
  { id: 4, name: 'Beryllium', box: 'a', cage: 'x', active: true },
  { id: 5, name: 'Boron', box: 'a', cage: 'x', active: true },
  { id: 6, name: 'Carbon', box: 'a', cage: 'x', active: true },
  { id: 7, name: 'Nitrogen', box: 'a', cage: 'x', active: true },
  { id: 8, name: 'Oxygen', box: 'a', cage: 'x', active: true },
  { id: 9, name: 'Fluorine', box: 'a', cage: 'x', active: true },
  { id: 10, name: 'Neon', box: 'a', cage: 'x', active: true },
  { id: 11, name: 'Sodium', box: 'a', cage: 'x', active: true },
  { id: 12, name: 'Magnesium', box: 'a', cage: 'x', active: true },
  { id: 13, name: 'Aluminum', box: 'a', cage: 'x', active: true },
  { id: 14, name: 'Silicon', box: 'a', cage: 'x', active: true },
  { id: 15, name: 'Phosphorus', box: 'a', cage: 'x', active: true },
  { id: 16, name: 'Sulfur', box: 'a', cage: 'x', active: true },
  { id: 17, name: 'Chlorine', box: 'a', cage: 'x', active: true },
  { id: 18, name: 'Argon', box: 'a', cage: 'x', active: true },
  { id: 19, name: 'Potassium', box: 'a', cage: 'x', active: true },
  { id: 20, name: 'Calcium', box: 'a', cage: 'x', active: true },
  { id: 1, name: 'Hydrogen', box: 'a', cage: 'x', active: true },
  { id: 2, name: 'Helium', box: 'a', cage: 'x', active: true },
  { id: 3, name: 'Lithium', box: 'a', cage: 'x', active: true },
  { id: 4, name: 'Beryllium', box: 'a', cage: 'x', active: true },
  { id: 5, name: 'Boron', box: 'a', cage: 'x', active: true },
  { id: 6, name: 'Carbon', box: 'a', cage: 'x', active: true },
  { id: 7, name: 'Nitrogen', box: 'a', cage: 'x', active: true },
  { id: 8, name: 'Oxygen', box: 'a', cage: 'x', active: true },
  { id: 9, name: 'Fluorine', box: 'a', cage: 'x', active: true },
  { id: 10, name: 'Neon', box: 'a', cage: 'x', active: true },
  { id: 11, name: 'Sodium', box: 'a', cage: 'x', active: true },
  { id: 12, name: 'Magnesium', box: 'a', cage: 'x', active: true },
  { id: 13, name: 'Aluminum', box: 'a', cage: 'x', active: true },
  { id: 14, name: 'Silicon', box: 'a', cage: 'x', active: true },
  { id: 15, name: 'Phosphorus', box: 'a', cage: 'x', active: true },
  { id: 16, name: 'Sulfur', box: 'a', cage: 'x', active: true },
  { id: 17, name: 'Chlorine', box: 'a', cage: 'x', active: true },
  { id: 18, name: 'Argon', box: 'a', cage: 'x', active: true },
  { id: 19, name: 'Potassium', box: 'a', cage: 'x', active: true },
  { id: 20, name: 'Calcium', box: 'a', cage: 'x', active: true },
  { id: 1, name: 'Hydrogen', box: 'a', cage: 'x', active: true },
  { id: 2, name: 'Helium', box: 'a', cage: 'x', active: true },
  { id: 3, name: 'Lithium', box: 'a', cage: 'x', active: true },
  { id: 4, name: 'Beryllium', box: 'a', cage: 'x', active: true },
  { id: 5, name: 'Boron', box: 'a', cage: 'x', active: true },
  { id: 6, name: 'Carbon', box: 'a', cage: 'x', active: true },
  { id: 7, name: 'Nitrogen', box: 'a', cage: 'x', active: true },
  { id: 8, name: 'Oxygen', box: 'a', cage: 'x', active: true },
  { id: 9, name: 'Fluorine', box: 'a', cage: 'x', active: true },
  { id: 10, name: 'Neon', box: 'a', cage: 'x', active: true },
  { id: 11, name: 'Sodium', box: 'a', cage: 'x', active: true },
  { id: 12, name: 'Magnesium', box: 'a', cage: 'x', active: true },
  { id: 13, name: 'Aluminum', box: 'a', cage: 'x', active: true },
  { id: 14, name: 'Silicon', box: 'a', cage: 'x', active: true },
  { id: 15, name: 'Phosphorus', box: 'a', cage: 'x', active: true },
  { id: 16, name: 'Sulfur', box: 'a', cage: 'x', active: true },
  { id: 17, name: 'Chlorine', box: 'a', cage: 'x', active: true },
  { id: 18, name: 'Argon', box: 'a', cage: 'x', active: true },
  { id: 19, name: 'Potassium', box: 'a', cage: 'x', active: true },
  { id: 20, name: 'Calcium', box: 'a', cage: 'x', active: true },
];

/**
 * Data source for the Users view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsersDataSource extends DataSource<UsersItem> {
  data: UsersItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<UsersItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange
      ).pipe(
        map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        })
      );
    } else {
      throw Error(
        'Please set the paginator and sort on the data source before connecting.'
      );
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: UsersItem[]): UsersItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: UsersItem[]): UsersItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
