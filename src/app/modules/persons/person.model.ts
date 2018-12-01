interface IPerson {
  id: number
  firstName: string
  lastName?: string
  middleName?: string
  dob?: string
}

export class Person implements IPerson {
  readonly id: number
  firstName: string
  lastName: string
  middleName: string
  dob: string
  constructor(data) {
    this.id = data.id
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.middleName = data.middleName
    this.dob = data.dob
    return this
  }
}
