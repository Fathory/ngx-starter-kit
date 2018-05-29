import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';

import { SharedModule } from '@ngx-starter-kit/shared';
import { AppConfirmModule } from '@ngx-starter-kit/app-confirm';
import { DraggableModule } from '@ngx-starter-kit/draggable';
import { NgxPipesModule } from '@ngx-starter-kit/ngx-pipes';

import { AccountsGridListComponent } from './containers/accounts-grid-list/accounts-grid-list.component';
import { AccountsTableComponent } from './containers/accounts-table/accounts-table.component';
import { AccountComponent } from './components/account/account.component';
import { AccountService } from './services/account.service';
import { RandomAccountService } from './services/random-account.service';


@NgModule({
  imports: [
    SharedModule,
    DraggableModule,
    AppConfirmModule,
    NgxPipesModule,
    MomentModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', redirectTo: 'crud-table', pathMatch: 'full', data: { animation: 'grid' } },
      { path: 'crud-table', component: AccountsTableComponent, data: { animation: 'accounts-table' } },
      { path: 'grid-list', component: AccountsGridListComponent, data: { animation: 'accounts-grid-list' } }
    ])
  ],
  declarations: [AccountsTableComponent, AccountComponent, AccountsGridListComponent],
  entryComponents: [AccountComponent],
  providers: [AccountService, RandomAccountService]
})
export class GridModule {}