import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { personReducer } from './store/store.reducer';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({personReducer}),
    StoreModule.forFeature('personnames',personReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
