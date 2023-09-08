import React from 'react'

// TODO: TEMP!
import { Card } from '@/entities/card'

import './styles.css'
import type { ColumnProps } from './types'

export const Column = ({ status }: ColumnProps) => {
  return (
    <div className="column">
      {status} <Card title="Todo" />
    </div>
  )
}
