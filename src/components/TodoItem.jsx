import CrossIcon from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";
import React from "react";

const TodoItem = React.forwardRef(({ todo, removeTodo, updateTodo, ...props }, ref) => {

    const { id, title, complete } = todo;
    return (
        <article {...props} ref={ref} className="flex gap-4 py-4 border-b px-4">
            <button
                className={`flex-none border-2 rounded-full h-5 w-5 
                 ${complete 
                    ? 
                    'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid place-items-center'
                    :
                    'inline-block'}`}
                onClick={() => updateTodo(id)}    >
               {complete  && <IconCheck />} 
            </button>
            <p className={`text-gray-600 grow dark:text-gray-400 ${complete && 'line-through'}`}>{title}</p>
            <button 
            className="flex-none"
            onClick={() => removeTodo(id)}><CrossIcon /></button>
        </article>
    );
})

export default TodoItem;