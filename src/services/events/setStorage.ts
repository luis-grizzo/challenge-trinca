import { IEvent } from 'shared/types/event'

export const setStorage = (array: IEvent[]) => {
  localStorage.setItem('@churras-trinca/events', JSON.stringify(array))
}
