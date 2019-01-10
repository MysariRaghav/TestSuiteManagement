import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ISuite } from './suite';
import { SuiteService } from "./suite.service";

@Component({
  templateUrl: './suite-detail.component.html',
  styleUrls: ['./suite-detail.component.css']
})
export class  SuiteDetailComponent implements OnInit {
  pageTitle = 'suite Detail';
  errorMessage = '';
   suite: ISuite | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private  suiteService: SuiteService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getSuite(id);
    }
  }

  getSuite(id: string) {
    this.suiteService.getSuite(id).subscribe(
      suite => this.suite = suite,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/testSuite']);
  }

}
