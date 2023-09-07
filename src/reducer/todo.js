import { ACTION } from "./ReducerUse";

export function Todo({todo, dispatch}) {
    return (
        <div>
            <span style={{color: todo.complete ? '#aaa': '#000'}}>{todo.name}</span>
            <button onClick={() => dispatch({ type: ACTION.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTION.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
        </div>
    );
}