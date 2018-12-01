import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StoreModule } from '@ngrx/store'
import { reducer } from './state/stakeholder.reducer'
import { StakeholderListComponent } from './stakeholder-list/stakeholder-list.component'
import { StakeholderRoutingModule } from './stakeholder-routing.module'
import { EffectsModule } from '@ngrx/effects'
import { StakeholderEffects } from './effects/stakeholder.effects'

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
