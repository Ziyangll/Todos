import React from "react";
import "./assets/styles.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
