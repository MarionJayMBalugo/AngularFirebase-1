export interface Events {
  id: number
  name: string
  category: string
  speaker: string
  emcee: string
  time: string
  date: string
  duration: number
  venue?: {
    address?: string
    building?: string
    room?: string
  }
  onlineUrl?: string
  participants: Participants[]
  description: string
}

export interface Participants{
    fullName: string
    position: string
    company: string
}
