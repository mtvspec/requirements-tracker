import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StakeholdersModule } from './modules/stakeholders/stakeholders.module'

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Dev',
      maxAge: 25
    }),
    EffectsModule.forRoot([]),
    StakeholdersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
