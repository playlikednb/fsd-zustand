import { CardProps } from '@/entities/card/model/types'
import { StatusEnum } from '@/shared/config'

export type ColumnProps = {
  status: StatusEnum
}

export type Store = {
  cards: CardProps[]
  addCard(title: string, status: StatusEnum): void
  deleteCard(id: number): void
}
