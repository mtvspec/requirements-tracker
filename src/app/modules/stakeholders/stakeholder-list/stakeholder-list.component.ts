import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import * as StakeholderActions from './../stakeholder.actions'

@Component({
  selector: 'app-stakeholder-list',
  templateUrl: './stakeholder-list.component.html',
  styleUrls: ['./stakeholder-list.component.scss']
})
export class StakeholderListComponent implements OnInit {
  selectedStakeholder = {
    name: ''
  }
  stakeholders = []
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.updateList()
    this.store.pipe(select('stakeholders')).subscribe(
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

}
