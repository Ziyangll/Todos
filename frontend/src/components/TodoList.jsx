import React, { useState, useEffect } from "react";
import "../assets/styles.css";
import CreateNewItem from "./CreateNewItem";
import TodoItem from "./TodoItem";

import axios from "axios";

export default function TodoList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("/api/todo")
      .then((item) => {
        setItems(item.data.todoListItems);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className='container'>
      <ul className='unstyle-list'>
        <CreateNewItem />
        {items.map((item) => (
          <TodoItem key={item._id} id={item._id} content={item.name} />
        ))}
      </ul>
    </div>
  );
}
