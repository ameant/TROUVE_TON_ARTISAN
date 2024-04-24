import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ListComponent } from './list/list.component';
import { SheetComponent } from './sheet/sheet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list/:category', component: ListComponent },
  { path: 'sheet', component: SheetComponent },
  { path: '**', pathMatch: 'full', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
