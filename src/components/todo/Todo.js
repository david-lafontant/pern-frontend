import React from 'react'
import Button from '../button/Button';
import EditTodo from '../editTodo/EditTodo';
import deleteTodo from '../../utils/deleteTodo';
import displayModal from '../../utils/toogleModal';


const Todo = ({ todo }) => {
  return (
    <li>
      <EditTodo todo={todo} />
      <span>
        {todo.content}
      </span>
      <Button type={"button"} text={"Edit"} clickHandle={() => displayModal(todo.todo_id)} />
      <Button type={"button"} text={"Delete"} clickHandle={(e) => deleteTodo(e, todo.todo_id)} />
    </li>
  )
}

export default Todo;