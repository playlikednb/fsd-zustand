import { StatusEnum } from '@/shared/config'
import { create } from 'zustand'

import { Store } from './types'

const useStore = create<Store>((set) => ({
  cards: [{ id: Date.now(), title: 'TestTask', status: StatusEnum.ONGOING }],
  addCard: (title, status) =>
    set((store) => ({
      cards: [...store.cards, { title, status, id: Date.now() }],
    })),
  deleteCard: (id) =>
    set((store) => ({
      cards: store.cards.filter((card) => card.id !== id),
    })),
}))

export default useStore
