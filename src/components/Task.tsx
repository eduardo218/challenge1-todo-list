import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.scss'

interface ITaskProps {
  id: string,
  description: string,
  isComplete: boolean,
  removeFromList : (id:string) => void
  toogleIsComplete : (id:string) => void,
}

const Task = ({id, description, isComplete, removeFromList, toogleIsComplete}: ITaskProps) => {

  const handleDeleteButton = () => {
    removeFromList(id)
  }

  const handleCheckComplete = () => {
    toogleIsComplete(id)
  }

  return (
    <div className={styles.taskContainer}>
        <span onClick={handleCheckComplete} className={`${styles.checkCircle} ${isComplete ? styles.done : ''}`}>
            { isComplete ? <CheckCircle weight='fill' size={20} /> : <Circle size={20} /> }
        </span>
        <p className={`${styles.taskDescription} ${isComplete ? styles.done : ''}`}>
            {description}
        </p>
        <span onClick={handleDeleteButton} className={styles.trash}>
            <Trash size={20} />
        </span>
    </div>
  )
}

export default Task