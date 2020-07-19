import React, { useState } from "react";
import axios from "axios";
import "../assets/styles.css";

export default function CreateNewItem() {
  const [name, setname] = useState("");
  function handleClick(e) {
    e.preventDefault();
    setname("");

    axios({
      method: "post",
      url: "/api/todo/create",
      data: {
        name: name,
      },
    });
  }
  function handleChange(e) {
    setname(e.target.value);
  }
  return (
    <div>
      <div className='item create-new-item'>
        <input
          type='text'
          placeholder='new item'
          value={name}
          onChange={handleChange}
        />
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}
