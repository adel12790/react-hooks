import { useReducer, useState } from "react";
import { Todo } from "./todo";

export const ACTION = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTION.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTION.TOGGLE_TODO:
            return todos.map(todo => {
                if(todo.id === action.payload.id){
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        case ACTION.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos;
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false}
}
// Reducer is to manage a whole comp. functionality with same concept like Redux (actions, dispatch and payloads)
export function ReducerUse() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTION.ADD_TODO, payload: {name: name}})
        setName('')
    }

    console.log(todos)
    return (
        <>
            <h1>Reducer example: </h1>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>
            {todos.map(todo => (<Todo key={todo.id} todo={todo} dispatch={dispatch}/>))}
        </>
    )
}