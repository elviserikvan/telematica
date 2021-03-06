import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemComponent } from './components/item/item.component';
import { HeaderComponent } from './layout/header/header.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { NoItemSelectedComponent } from './components/no-item-selected/no-item-selected.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    SidebarComponent,
    ItemsListComponent,
    ItemComponent,
    HeaderComponent,
    AddFormComponent,
    NoItemSelectedComponent,
    EditFormComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
