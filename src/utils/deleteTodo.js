const deleteTodo = async (e, id) => {
  e.preventDefault();
  try {
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" }
    })
    const data = await response.json();
    console.log(data)
  } catch (err) {
    console.error(err.message);
  }

}

export default deleteTodo;