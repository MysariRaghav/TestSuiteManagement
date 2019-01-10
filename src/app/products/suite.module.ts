import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SuiteListComponent } from './suite-list.component';
import { SuiteDetailComponent } from './suite-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
// import { SuiteDetailGuard } from './suite-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'testSuite', component: SuiteListComponent },
      {
        path: 'testSuite/:id',
        // canActivate: [SuiteDetailGuard],
        component: SuiteDetailComponent
      },
    ]),
    SharedModule
  ],
  declarations: [
    SuiteListComponent,
    SuiteDetailComponent,
    ConvertToSpacesPipe
  ]
})
export class SuiteModule { }
