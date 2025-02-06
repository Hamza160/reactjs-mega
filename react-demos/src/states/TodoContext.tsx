import { createContext, ReactNode, useReducer } from "react";

export interface Todo{
    id:string;
    title:string;
    isCompleted:boolean;
}

interface InitialState {
    todos:Todo[]
}

const initialState: InitialState = {
    todos:[]
}

type Action = | {type:'ADD_TODO'; payload:Todo} | {type:'REMOVE_TODO'; payload:string} | {type:'TOGGLE_TODO'; payload:string}

const reducer = (state:InitialState, action:Action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {...state, todos:[...state.todos, action.payload]}
        case 'REMOVE_TODO':
            return {...state, todos:state.todos.filter(todo => todo.id !== action.payload)}
        case 'TOGGLE_TODO':
            return {...state, todos:state.todos.map(todo => todo.id === action.payload ? {...todo, isCompleted: !todo.isCompleted} : todo)}
        default:
            return state;
    }
}

export interface TodoContextInterface{
    todos:Todo[];
    addTodo:(todo:Todo) => void;
    removeTodo:(id:string) => void;
    toggleTodo:(id:string) => void;
}

export const TodoContext = createContext<TodoContextInterface | undefined>(undefined);

export const TodoProvider = ({children}:{children:ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addTodo = (todo:Todo) => {
        dispatch({type:'ADD_TODO', payload:todo})
    }

    const removeTodo = (id: string) => {
        dispatch({type:'REMOVE_TODO', payload:id})
    }

    const toggleTodo = (id: string) => {
        dispatch({type:'TOGGLE_TODO', payload:id})
    }

    return (
        <TodoContext.Provider value={{todos:state.todos, addTodo, removeTodo, toggleTodo}}>{children}</TodoContext.Provider>
    )
}