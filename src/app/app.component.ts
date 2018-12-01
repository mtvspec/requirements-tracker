import { Component } from '@angular/core'

interface Stakeholder {
  id: number
  name: string
  description: string
}

interface State {
  currentStakeholder: Stakeholder | null
  stakeholders: Stakeholder[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend'
}
