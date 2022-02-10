export interface IEvent {
  id: number
  title: string
  additionalInfo: string
  date: Date
  value: number
  participants: IParticipant[]
}

export interface IParticipant {
  id: number
  name: string
  amount: number
  includeDrink: boolean
  paid: boolean
}
