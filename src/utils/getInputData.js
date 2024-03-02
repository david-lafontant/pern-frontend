function getInputData(e, setValue) {
  e.preventDefault();
  const inputValue = e.target.value;
  if (inputValue !== "") {
    setValue(prev => inputValue);
  }
}

export default getInputData;
