import React from 'react'
import classNames from 'classnames'

import './styles.css'
import type { CardProps } from './types'

const STATUS = 'DONE'

export const Card = ({ title }: CardProps) => {
  return (
    <div className="card">
      <div>{title}</div>
      <div className="cardFooter">
        <div></div>
        <div className={classNames('cardStatus', `cardStatus__${STATUS}`)}>
          {STATUS}
        </div>
      </div>
    </div>
  )
}
