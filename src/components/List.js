import Todo from './Todo'
//create list component
const List = ({ todos }) => {
    return (
        <div>
          {/* mapping imported todos */}
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

export default List

