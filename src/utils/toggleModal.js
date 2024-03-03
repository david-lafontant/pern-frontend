function toggleModal(todo_id) {
  const id = "#todo" + todo_id;
  const modal = document.querySelector(id);
  if (modal.style.display === "block") {
    modal.style.display = "none"
  } else {
    modal.style.display = "block"
  }

}
export default toggleModal;
