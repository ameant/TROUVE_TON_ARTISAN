import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SheetComponent } from './sheet/sheet.component';
import { ErrorComponent } from './error/error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LegalNoticesComponent } from './legal-notices/legal-notices.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { CookiesComponent } from './cookies/cookies.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListComponent,
    SheetComponent,
    ErrorComponent,
    LegalNoticesComponent,
    PersonalDataComponent,
    AccessibilityComponent,
    CookiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
