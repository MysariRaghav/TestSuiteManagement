import { Component, OnInit } from '@angular/core';

import { ISuite } from './suite';
import { SuiteService } from "./suite.service";

@Component({
  templateUrl: './suite-list.component.html',
  styleUrls: ['./suite-list.component.css']
})
export class SuiteListComponent implements OnInit {
  pageTitle = 'Test Suite';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredSuites = this.listFilter ? this.performFilter(this.listFilter) : this.suites;
  }

  filteredSuites: ISuite[] = [];
  suites: ISuite[] = [];

  constructor(private suiteService: SuiteService) {

  }

  performFilter(filterBy: string): ISuite[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.suites.filter((suite: ISuite) =>
      suite.suiteName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.suiteService.getSuites().subscribe(
      suites => {
        this.suites = suites;
        this.filteredSuites = this.suites;
      },
      error => this.errorMessage = <any>error
    );
  }
}
