import { render } from '@testing-library/react'
import { useEffect } from 'react'
import { vi } from 'vitest'

import { StatusEnum } from '@/shared/config'

import useStore from './store'
import type { Store } from './types'

function TestComponent({ selector, effect }: any) {
  const items = useStore(selector)

  useEffect(() => effect(items), [items])

  return null
}

test('should return default value at start', () => {
  const selector = (store: Store) => store.cards
  const effect = vi.fn()
  render(<TestComponent selector={selector} effect={effect} />)
  expect(effect).toHaveBeenCalledWith([])
})

test('should add items to the store and re-run the effect', () => {
  const selector = (store: Store) => ({
    cards: store.cards,
    addCard: store.addCard,
    deleteCard: store.deleteCard,
  })
  let createdCard = false
  let currentItems: undefined | Store

  const effect = vi.fn().mockImplementation((items) => {
    currentItems = items
    if (!createdCard) {
      items.addCard('testTitle', StatusEnum.PLANNED, 1)
      createdCard = true
    } else if (items.cards.length === 1) {
      items.deleteCard(1)
    }
  })
  render(<TestComponent selector={selector} effect={effect} />)
  expect(effect).toHaveBeenCalledTimes(3)
  expect(currentItems?.cards).toEqual([])
})
