import Clipboard from '../assets/clipboard.svg'
import styles from './EmptyBox.module.scss'

const EmptyBox = () => {
  return (
    <div className={styles.emptyContainer}>
        <img src={Clipboard}/>
        <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}

export default EmptyBox