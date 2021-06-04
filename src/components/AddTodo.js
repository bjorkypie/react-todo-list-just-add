//this allows us to look at a component's state
import { useState } from 'react'

//function that adds a todo list item, paramter is an event listener
const AddTodo = ({ onAdd }) => { 
    //declaring state variables, using react syntax
    const [item, setItem] = useState('')

    //on submit function, e is event
    const onSubmit = (e) => {
        //prevent form refresh
        e.preventDefault()
        //passes in item from form below
        onAdd({item})
        //setting as empty string
        setItem('')
    }

    return (
        //calling onsubmit function
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                //sets value to item
                value={item}
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo
