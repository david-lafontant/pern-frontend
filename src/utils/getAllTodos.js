const getAllTodos = async (setTodos) => {
  const response = await fetch('http://localhost:5000/todos', {
    method: "GET",
    headers: { "Content-type": "application/json" }
  })
  const data = await response.json();
  setTodos(prev => data);
}

export default getAllTodos;