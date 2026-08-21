import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/Todo/todoSlice'

const AddTodos = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHendler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


    return (
        <form onSubmit={addTodoHendler} className="flex items-center gap-3 max-w-md mx-auto mt-10">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter something..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg 
               outline-none focus:ring-1 focus:ring-blue-300 
               focus:border-blue-300"
            />

            <button
                type="submit"
                className="px-5 py-2 bg-blue-500 text-white font-medium 
               rounded-lg hover:bg-blue-700 
               transition duration-200"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodos