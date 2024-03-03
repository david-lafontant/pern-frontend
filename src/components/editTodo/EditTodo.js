import React, { useState } from 'react'
import styles from './EditTodo.module.css';
import Button from '../button/Button';
import getInputData from '../../utils/getInputData';
import updateTodo from '../../utils/updateTodo';

const EditTodo = ({ todo }) => {
  const [editedTodo, setEditedTodo] = useState(todo.content);

  return (
    <div className={styles.outer} id={"todo" + todo.todo_id} >
      <div className='inner'>
        <p>

          {todo.content}
        </p>
        <input type="text" name="editTodo" id="editTodo" onBlur={(e) => getInputData(e, setEditedTodo)} />
        <Button type={"button"} text={"Edit"} clickHandle={(e) => updateTodo(e, editedTodo, todo.todo_id)} />
        <p>Edited: {editedTodo}</p>
      </div>
    </div>
  )
}

export default EditTodo;