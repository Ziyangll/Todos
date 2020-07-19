import React from "react";
import axios from "axios";
import "../assets/styles.css";

export default function TodoItem({ id, content }) {
  function onChange() {
    axios({
      method: "post",
      url: "/api/todo/delete",
      data: {
        id: id,
      },
    });
  }
  return (
    <div>
      <div className='item'>
        <input type='checkbox' name='checkbox' onChange={onChange} />
        <span>{content}</span>
      </div>
    </div>
  );
}
