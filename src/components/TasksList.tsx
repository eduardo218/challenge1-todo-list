import { useState } from 'react'
import EmptyBox from './EmptyBox'
import SearchBox from './SearchBox'
import Task from './Task'
import styles from './TasksList.module.scss'

import { ITask } from '../types/ITask'

const TasksList = () => {
  const [tasks, setTaks] = useState<ITask[]>([])

  const addTaskToList = (task: ITask) => {
    setTaks([...tasks, task])
  }

  const removeTaskFromList = (id: string) => {
    setTaks(tasks.filter(task => task.id !== id))
  }

  const toogleIsComplete = (id: string) => {
    const tasksCopy = [...tasks]
    for (const task of tasksCopy) {
      if(task.id === id){
        task.isComplete = !task.isComplete
      }
    }
    setTaks(tasksCopy)
  }

  const completesCounter = tasks.filter(task => task.isComplete === true).length

  return (
    <div className={styles.tasksContainer}>

      <SearchBox onAddTaskToList={addTaskToList}/>

        <header className={styles.tasksStatus}>
            <div className={styles.created}>
              Tarefas criadas 
              <span className={styles.counter}>{tasks.length}</span>
            </div>
            <div className={styles.done}>
              Concluídas 
              <span className={styles.counter}>
                {
                  completesCounter > 0 ? 
                  `${completesCounter} de ${tasks.length}` : 
                  completesCounter
                }
              </span>
            </div>
        </header>

        {
          tasks.length === 0 ? <EmptyBox /> : 
          <>
            {
              tasks.map(task => (
                <Task 
                  key={task.id} 
                  id={task.id}
                  description={task.description} 
                  isComplete={task.isComplete}
                  removeFromList={removeTaskFromList}
                  toogleIsComplete={toogleIsComplete}
                />
              ))
            }
          </>
        }
    </div>
  )
}

export default TasksList