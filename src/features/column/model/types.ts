import { CardProps } from '@/entities/card/model/types'
import { StatusEnum } from '@/shared/config'

export type ColumnProps = {
  status: StatusEnum
}

export type Store = {
  cards: CardProps[]
  draggedCardId: number | null
  addCard(title: string, status: StatusEnum, id?: number): void
  deleteCard(id: number): void
  moveTask(id: number, newStatus: StatusEnum): void
  setDraggedCardId(id: number | null): void
}
