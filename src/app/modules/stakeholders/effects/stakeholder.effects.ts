import { Injectable } from "@angular/core"
import { Actions, Effect, ofType } from "@ngrx/effects"
import { StakeholderService } from "../services/stakeholder.service"
import * as stakeholderActions from './../stakeholder.actions'
import { map, switchMap } from 'rxjs/operators'

console.log('stakeholders effects');


@Injectable({
  providedIn: 'root'
})
export class StakeholderEffects {
  constructor(
    private actions$: Actions,
    private stakeholderService: StakeholderService
  ) { }
  @Effect()
  loadStakeholders$ = this.actions$.pipe(
    ofType(stakeholderActions.StakeholderActionTypes.Load),
    switchMap(action => this.stakeholderService.fetchStakeholders().pipe(
      map(stakeholders => (new stakeholderActions.LoadSuccess(stakeholders.data.allStakeholders)))
    ))
  )
}