import { Action } from "@ngrx/store";

export enum StakeholderActionTypes {
  SelectStakeholder = '[Stakeholders] Select Stakeholder',
  Load = '[Stakeholders ] Load Stakeholders',
  LoadSuccess = '[StakeholderService] Load Success',
  LoadFail = '[StakeholderService] Load Fail'
}

export class SelectStakeholder implements Action {
  readonly type = StakeholderActionTypes.SelectStakeholder
  constructor(public payload: any) { }
}

export class Load implements Action {
  readonly type = StakeholderActionTypes.Load
}

export class LoadSuccess implements Action {
  readonly type = StakeholderActionTypes.LoadSuccess
  constructor(public payload: any) { }
}

export type StakeholderActions = LoadSuccess
  | SelectStakeholder
  | Load