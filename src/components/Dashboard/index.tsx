import { NotHaveTasks } from '../NotHaveTasks'
import TASKS_DATA from '../../mocks/tasks.mock.json'
import { Tasks } from '../Tasks'
import Styles from './styles'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Plus } from '@phosphor-icons/react'

export function Dashboard() {
  const [tasks, setTasks] = useState(TASKS_DATA)
  const [newTask, setNewTask] = useState('')

  const completedTasks = tasks.filter((task) => task.completed === true).length

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function deletedTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id)

    setTasks(tasksWithoutDeletedOne)
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Campo obrigatório')
  }

  function finishedTask(id: number) {
    const tasksWithoutFinished = tasks.map((task) => {
      if (task.id === id) {
        if (task.completed === true) {
          return {
            ...task,
            completed: false,
          }
        } else {
          return {
            ...task,
            completed: true,
          }
        }
      }
      return task
    })

    setTasks(tasksWithoutFinished)
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    setTasks((state) => [
      ...state,
      {
        id: Math.random(),
        task: newTask,
        completed: false,
      },
    ])

    setNewTask('')
  }

  return (
    <Styles.Container>
      <Styles.SearchBar onSubmit={handleCreateTask}>
        <input
          type="text"
          name="task"
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          value={newTask}
          placeholder="Adicione uma nova tarefa"
          required
        />

        <button type="submit">
          Criar
          <Plus size={16} />
        </button>
      </Styles.SearchBar>
      <Styles.Header>
        <Styles.MaidsTasks>
          <h2>Tarefas criadas</h2>

          <div className="circle">
            <p>{tasks.length}</p>
          </div>
        </Styles.MaidsTasks>

        <Styles.FinishedTasks>
          <h2>Concluídas</h2>

          <div className="circle">{`${completedTasks} de ${tasks.length}`}</div>
        </Styles.FinishedTasks>
      </Styles.Header>

      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <Tasks
              key={task.id}
              id={task.id}
              task={task.task}
              completed={task.completed}
              onFinishedTask={finishedTask}
              onDeletedTask={deletedTask}
            />
          )
        })
      ) : (
        <NotHaveTasks />
      )}
    </Styles.Container>
  )
}
