import styles from './App.module.scss'
import Header from './components/Header'
import TasksList from './components/TasksList'

const App = () => {

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TasksList />
      </main>
    </>
  )
}

export default App