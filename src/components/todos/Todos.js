import React, { useEffect, useState } from 'react';
import Todo from '../todo/Todo';
import getAllTodos from '../../utils/getAllTodos';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => { getAllTodos(setTodos) }, [todos])
  return (
    <div>

      <ul>
        {todos.map(todo => <Todo key={todo.todo_id} todo={todo} />)}
      </ul>
    </div>
  )
}

export default Todos