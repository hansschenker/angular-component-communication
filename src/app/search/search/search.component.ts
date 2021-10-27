import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// search
import { SearchService } from './../search.service';

@Component({
  selector: 'items-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filterControl: FormControl = new FormControl();

  constructor(public svc: SearchService) { }

  ngOnInit(): void {
  }

}
