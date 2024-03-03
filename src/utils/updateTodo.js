
import toggleModal from "./toggleModal";
const updateTodo = async (e, content, id) => {
  e.preventDefault();
  try {
    const body = { content };
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body)
    })
    const data = await response.json();
    console.log(data)
    toggleModal(id);
  } catch (err) {
    console.error(err.message);
  }

}

export default updateTodo;