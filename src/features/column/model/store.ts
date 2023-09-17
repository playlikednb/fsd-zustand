import { StatusEnum } from '@/shared/config'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { Store } from './types'

const useStore = create<Store>()(
  persist(
    devtools((set) => ({
      cards: [
        { id: Date.now(), title: 'TestTask', status: StatusEnum.ONGOING },
      ],
      draggedCardId: null,

      addCard: (title, status) =>
        set(
          (store) => ({
            cards: [...store.cards, { title, status, id: Date.now() }],
          }),
          false,
          'addCard'
        ),

      deleteCard: (id) =>
        set(
          (store) => ({
            cards: store.cards.filter((card) => card.id !== id),
          }),
          false,
          'deleteCard'
        ),

      setDraggedCardId: (id) =>
        set({ draggedCardId: id }, false, 'setDraggedCardId'),

      moveTask: (id, newStatus) =>
        set(
          (store) => ({
            cards: store.cards.map((card) =>
              card.id === id ? { ...card, status: newStatus } : card
            ),
          }),
          false,
          'moveTask'
        ),
    })),
    { name: 'store' }
  )
)

export default useStore
