import { Column } from '@/features/column'
import { StatusEnum } from '@/shared/config'

import './styles.css'
import type { CardBoardProps } from './model/types'

export const CardBoard = ({}: CardBoardProps) => {
  return (
    <div className="cardBoard">
      <Column status={StatusEnum.PLANNED} />
      <Column status={StatusEnum.ONGOING} />
      <Column status={StatusEnum.DONE} />
    </div>
  )
}
