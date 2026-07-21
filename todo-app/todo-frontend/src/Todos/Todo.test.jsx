import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Todo from './Todo'

test('renders todo text correctly', () => {
  const todo = {
    text: 'Component testing with Vitest',
    done: false
  }

  render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)

  expect(screen.getByText('Component testing with Vitest')).toBeInTheDocument()
  expect(screen.getByText('This todo is not done')).toBeInTheDocument()
})
