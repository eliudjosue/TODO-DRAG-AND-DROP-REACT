const TodoComputed = ({computedItemLeft, cleanComplete}) => {
    return (
        <section className="flex justify-between px-4 py-4 bg-white rounded-b-md overflow-hidden transition-all duration-1000 dark:bg-gray-800">
            <span className="text-gray-400">{computedItemLeft} Items left</span>
            <button 
            className="text-gray-400"
            onClick={() => cleanComplete()}>clear complete</button>
        </section>
    );
}

export default TodoComputed;