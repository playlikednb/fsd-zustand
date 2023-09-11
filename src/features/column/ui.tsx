import { shallow } from 'zustand/shallow'

// TODO: TEMP!
import useStore from '@/features/column/model/store'
import { Card } from '@/entities/card'

import './styles.css'
import type { ColumnProps } from './model/types'
import { useState } from 'react'
import classNames from 'classnames'

export const Column = ({ status }: ColumnProps) => {
  const [text, setText] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const [dropReady, setDropReady] = useState<boolean>(false)

  const cards = useStore(
    (store) => store.cards.filter((card) => card.status === status),
    shallow
  )

  const onAddCard = useStore((store) => store.addCard)
  const setDraggedCardId = useStore((store) => store.setDraggedCardId)
  const moveCard = useStore((store) => store.moveTask)
  const draggedCardId = useStore((store) => store.draggedCardId)

  return (
    <div
      className={classNames('column', { dropReady })}
      onDragOver={(e) => {
        e.preventDefault()
        setDropReady(true)
      }}
      onDragLeave={(e) => {
        e.preventDefault()
        setDropReady(false)
      }}
      onDrop={(e) => {
        e.preventDefault()
        if (!draggedCardId) return null
        moveCard(draggedCardId, status)
        setDraggedCardId(null)
        setDropReady(false)
      }}
    >
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
