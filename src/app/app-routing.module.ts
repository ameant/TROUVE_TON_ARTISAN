import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SheetComponent } from './sheet/sheet.component';
import { LegalNoticesComponent } from './legal-notices/legal-notices.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'liste/:category', component: ListComponent },
  { path: 'fiche/:id', component: SheetComponent },
  { path: 'mentions-légales', component: LegalNoticesComponent },
  { path: 'données-personnelles', component: PersonalDataComponent },
  { path: 'accessibilité', component: AccessibilityComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: '**', pathMatch: 'full', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
