import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import {
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatButtonModule,
  MatPaginatorModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponentComponent,
    PaginatorComponent,
    EventListComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
