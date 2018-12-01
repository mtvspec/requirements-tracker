import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import * as StakeholderActions from './../stakeholder.actions'
import { Stakeholder } from '../stakeholder.model'
import { takeWhile } from 'rxjs/operators'

@Component({
  selector: 'app-stakeholder-list',
  templateUrl: './stakeholder-list.component.html',
  styleUrls: ['./stakeholder-list.component.scss']
})
export class StakeholderListComponent implements OnInit {
  componentActive: boolean = true
  selectedStakeholder: Stakeholder
  stakeholders = []
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.updateList()
    this.store.pipe(select('stakeholders'),
      takeWhile(() => this.componentActive))
      .subscribe(
        state => {
          this.selectedStakeholder = state['currentStakeholder']
          this.stakeholders = state['stakeholders']
        }
      )
  }

  onStakeholderSelect(stakeholder) {
    this.store.dispatch(new StakeholderActions.SelectStakeholder(stakeholder))
  }
  updateList() {
    this.store.dispatch(new StakeholderActions.Load())
  }

  ngOnDestroy() {
    this.componentActive = false
  }

}
