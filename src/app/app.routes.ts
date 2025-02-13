import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleListComponent } from './components/sale-list/sale-list.component';
import { SaleCreateComponent } from './components/sale-create/sale-create.component';

export const routes: Routes = [
  { path: 'sales', component: SaleListComponent },
  { path: 'sales/create', component: SaleCreateComponent },
  { path: '', redirectTo: '/sales', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
