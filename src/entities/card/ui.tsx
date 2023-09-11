import classNames from 'classnames'

import useStore from '@/features/column/model/store'

import './styles.css'
import deleteIcon from '@/shared/ui/icon/delete.svg'
import type { CardProps } from './model/types'

export const Card = ({ id, title, status }: CardProps) => {
  // TODO: MOVE LOGIC?
  const onDeleteCard = useStore((store) => store.deleteCard)

  return (
    <div className="card" draggable>
      <div className="cardHeader">
        <div className="cardId">{id}</div>
      </div>
      <div>{title}</div>
      <div className="cardFooter">
        <img
          src={deleteIcon}
          alt="Delete Card"
          width="16"
          height="16"
          onClick={() => onDeleteCard(id)}
        />
        <div className={classNames('cardStatus', `cardStatus__${status}`)}>
          {status}
        </div>
      </div>
    </div>
  )
}
