const postData = async (e, content) => {
  e.preventDefault();
  try {
    const body = { content };
    const response = await fetch("http://localhost:5000/todos/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    console.log(response)
  } catch (err) {
    console.error(err.message);
  }

}

export default postData;
