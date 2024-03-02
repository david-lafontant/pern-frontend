import React, { Fragment, useState } from 'react';
import getInputData from '../../utils/getInputData';
import postData from '../../utils/postData';
import Button from '../button/Button';

const CreateTodo = () => {
  const [content, setContent] = useState("");

  return (
    <Fragment>
      <div>
        <form>
          <label htmlFor="createTodo">Add content ...</label>
          <input type="text" id="createTodo" name="createTodo" placeholder='Add todo' onBlur={(e) => getInputData(e, setContent)} />
          <Button type={"button"} text={"Submit"} clickHandle={(e) => postData(e, content)} />
        </form>
        <p>My content: {content}</p>
      </div>
    </Fragment>
  )
}

export default CreateTodo;