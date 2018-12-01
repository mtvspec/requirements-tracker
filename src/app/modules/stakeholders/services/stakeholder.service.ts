import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'
import { Observable } from 'rxjs';
import { Stakeholder } from '../stakeholder.model';

@Injectable({
  providedIn: 'root'
})
export class StakeholderService {

  constructor(private apollo: Apollo) { }
  fetchStakeholders() {
    return this.apollo.query<allStakeholders>({
      query: StakeholdersQuery,
      fetchPolicy: 'network-only'
    })
  }
}

interface allStakeholders {
  allStakeholders: Stakeholder[]
}

const StakeholdersQuery = gql`

  query allStakeholders {
    allStakeholders {
      id
      person {
        id
        firstName
        lastName
        middleName
        dob
      }
    }
  }

`