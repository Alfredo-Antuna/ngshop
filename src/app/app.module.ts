import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogComponent } from './dog/dog.component';
import { LikeListComponent } from './like-list/like-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsListComponent,
    DogComponent,
    LikeListComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
