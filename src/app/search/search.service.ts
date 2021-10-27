import { map, startWith, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable, combineLatest } from 'rxjs';

export interface Item {
  name: string;
}
@Injectable()
export class SearchService {
  // search string changes
  public searchState = new BehaviorSubject<string>("")
  public searchChanges = this.searchState.asObservable().pipe(
    startWith(""),
  );

  // public searchItems: Observable<Item[]> = of([{"name": "Product A"},{"name": "Product B"}])
  //public searchItems!: Observable<Item[]>
  // search items changes
  public searchItemsState = new BehaviorSubject<Item[]>([{"name": "Product A"},{"name": "Product B"}])
  public searchItemsChanges = this.searchItemsState.asObservable()

  public searchItemsFilteredChanges: Observable<Item[]> = of([])

  constructor() {
    this.searchItemsFilteredChanges =
    combineLatest(this.searchItemsChanges, this.searchChanges).pipe(
    tap(([itms, srch]) => console.log("search items:",itms)),
    tap(([itms, srch]) => console.log("search string", srch)),
    map(([items, filterString]) => items.filter(item => item.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
  );
   }

}
