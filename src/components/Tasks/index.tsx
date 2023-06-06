import { Trash } from '@phosphor-icons/react'

import Styles from './styles'
import { ChangeEvent, useState } from 'react'

interface TasksProps {
  id: number
  task: string
  completed: boolean
  onFinishedTask: (id: number) => void
  onDeletedTask: (id: number) => void
}

export function Tasks({
  task,
  completed,
  onDeletedTask,
  id,
  onFinishedTask,
}: TasksProps) {
  const [checked, setChecked] = useState(completed)

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }

  return (
    <Styles.Container>
      <Styles.Content className={checked ? 'checked' : ''}>
        <form>
          <label className="container">
            <input
              type="checkbox"
              onChange={handleNewCommentChange}
              onClick={() => onFinishedTask(id)}
              checked={checked}
            />
            <div className="checkmark"></div>
          </label>

          <p>{task}</p>

          <Trash size={24} onClick={() => onDeletedTask(id)} />
        </form>
      </Styles.Content>
    </Styles.Container>
  )
}
