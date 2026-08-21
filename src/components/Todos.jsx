import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/Todo/todoSlice'


const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('')

    const startEdit = (todo) => {
        setEditingId(todo.id)
        setEditText(todo.text)
    }

    const saveEdit = (id) => {
        if (editText.trim() === '') return
        dispatch(updateTodo({ id, text: editText }))
        setEditingId(null)
        setEditText('')
    }

    return (
        <div className=" w-2/4 mx-auto mt-8">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
                My Todos :
            </h2>

            <ul className="space-y-3">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between 
                                   bg-white border border-gray-200 
                                   rounded-lg px-4 py-3 
                                   shadow-sm hover:shadow-md 
                                   transition"
                    >
                        {editingId === todo.id ? (
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && saveEdit(todo.id)}
                                autoFocus
                                className="flex-1 px-2 py-1 border border-blue-300 
                                           rounded-md outline-none mr-3"
                            />
                        ) : (
                            <span className="text-gray-700 font-medium">
                                {todo.text}
                            </span>
                        )}

                        <div className="flex gap-2">
                            {editingId === todo.id ? (
                                <button
                                    onClick={() => saveEdit(todo.id)}
                                    className="bg-green-500 text-white px-3 py-1 
                                               rounded-md hover:bg-green-600 transition"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => startEdit(todo)}
                                    className="bg-blue-500 text-white px-3 py-1 
                                               rounded-md hover:bg-blue-600 transition"
                                >
                                    Edit
                                </button>
                            )}

                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="bg-red-500 text-white px-3 py-1 
                                           rounded-md hover:bg-red-600 transition"
                            >
                                X
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Todos