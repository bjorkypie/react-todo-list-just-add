//ability to use states!
import { useState } from 'react'
//importing following components:
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

//app function
function App() {
  //default todos, hardcoded array of objects
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);
  //when adding a todo
  const addTodo = (todo) => {
    //generate a random id with six digits
    const id = Math.ceil(Math.random()*100000)
    //creates the object with id, and whatever else is in the todo, ability to have several things in one todo?
    const newTodo = {id, ...todo}
    //call set todos with all todos, adding last one at the end
    setTodos([...todos, newTodo])
  }
//output is what will render on page
  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}

export default App;
