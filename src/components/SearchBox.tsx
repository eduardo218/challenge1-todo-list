import styles from './SearchBox.module.scss'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'
import { nanoid } from 'nanoid'

import { ITask } from '../types/ITask'

interface ISearchBoxProps {
  onAddTaskToList: (task : ITask) => void
}

const SearchBox = ({onAddTaskToList}: ISearchBoxProps) => {
  const [inputText, setInputText] = useState('')

  const handleInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onAddTaskToList({
      id: nanoid(),
      description: inputText,
      isComplete: false
    })
    setInputText('')
  }

  return (
    <form className={styles.searchBoxContainer} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa'
          onChange={handleInputText}
          value={inputText}
          required
        />
        <button type='submit'>Criar <PlusCircle size={18} /></button>
    </form>
  )
}

export default SearchBox