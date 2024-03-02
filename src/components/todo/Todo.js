import React from 'react'
import Button from '../button/Button';
import deleteTodo from '../../utils/deleteTodo';

const Todo = ({ todo }) => {
  return (
    <li>
      <span>
        {todo.content}
      </span>
      <Button type={"button"} text={"Edit"} clickHandle={() => console.log("Edit todo")} />
      <Button type={"button"} text={"Delete"} clickHandle={(e,) => deleteTodo(e, todo.todo_id)} />
    </li>
  )
}

export default Todo;