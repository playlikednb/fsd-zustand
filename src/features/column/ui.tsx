import { shallow } from 'zustand/shallow'

// TODO: TEMP!
import useStore from '@/features/column/model/store'
import { Card } from '@/entities/card'
import { StatusEnum } from '@/shared/config'

import './styles.css'
import type { ColumnProps } from './model/types'
import { useState } from 'react'

export const Column = ({ status }: ColumnProps) => {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  const cards = useStore(
    (store) => store.cards.filter((card) => card.status === status),
    shallow
  )

  const onAddCard = useStore((store) => store.addCard)

  return (
    <div className="column">
      <div className="columnHeader">
        <p>{status}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {cards.map((card) => (
        <Card
          id={card.id}
          status={card.status}
          title={card.title}
          key={card.id}
        />
      ))}
      {open && (
        <div className="modal">
          <div className="modalContent">
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
              onClick={() => {
                if (text.length === 0) return null
                onAddCard(text, status)
                setText('')
                setOpen(false)
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
