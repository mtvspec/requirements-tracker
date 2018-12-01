import { Person } from "../persons/person.model"

interface IStakeholder {
  id: number
  person: Person
}

export class Stakeholder implements IStakeholder {
  id: number
  person: Person
  constructor(data) {
    this.id = data.id
    this.person = new Person(data.person)
    return this
  }
}
