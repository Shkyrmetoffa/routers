import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { BubbleComponent } from './bubble/bubble.component';
import { QuickComponent } from './quick/quick.component';
import { ShakerComponent } from './shaker/shaker.component';
import { MergeComponent } from './merge/merge.component';
import { InsertionComponent } from './insertion/insertion.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bubble-sort', component: BubbleComponent },
  {path: 'quick-sort', component: QuickComponent},
  {path: 'shaker-sort', component: ShakerComponent},
  { path: 'merge-sort', component: MergeComponent },
  { path: 'insertion-sort', component: InsertionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BubbleComponent,
    QuickComponent,
    ShakerComponent,
    MergeComponent,
    InsertionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
