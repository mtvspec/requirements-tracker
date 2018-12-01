import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StakeholderRoutingModule } from './stakeholder-routing.module'

import { reducer } from './state/stakeholder.reducer'
import { StakeholderEffects } from './effects/stakeholder.effects'

import { StakeholderListComponent } from './stakeholder-list/stakeholder-list.component'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('stakeholders', reducer),
    EffectsModule.forFeature([StakeholderEffects]),
    StakeholderRoutingModule
  ],
  declarations: [StakeholderListComponent]
})
export class StakeholdersModule { }
