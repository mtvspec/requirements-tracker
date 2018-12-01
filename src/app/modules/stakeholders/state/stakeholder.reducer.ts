import { StakeholderActionTypes } from "../stakeholder.actions"
import { Stakeholder } from "../stakeholder.model"

interface IStakeholdersState {
  currentStakeholder: Stakeholder,
  stakeholders: Stakeholder[]
}

const initialState: IStakeholdersState = {
  currentStakeholder: null,
  stakeholders: []
}

export function reducer(state = initialState, action) {
  switch (action.type) {

    case 'SELECT_STAKEHOLDER':
      return {
        ...state,
        currentStakeholder: action.payload
      }

    case StakeholderActionTypes.SelectStakeholder:
      return {
        ...state,
        currentStakeholder: action.payload
      }

    case StakeholderActionTypes.Load:
      return {
        ...state
      }

    case StakeholderActionTypes.LoadSuccess:
      return {
        ...state,
        stakeholders: action.payload
      }

    default:
      return state

  }
}