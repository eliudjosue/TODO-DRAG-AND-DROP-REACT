const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto  py-4">
            <div className="flex justify-center rounded-md bg-white p-4 gap-4 transition-all duration-1000 dark:bg-gray-800">
                <button
                    onClick={() => changeFilter("all")}
                    className={
                        `${filter === "all"
                            ? 'text-blue-600 hover:text-gray-400'
                            : 'text-gray-400 hover:text-blue-600'}`
                    }
                >All</button>
                <button
                    onClick={() => changeFilter("active")}
                    className={
                        `${filter === "active"
                            ? 'text-blue-600 hover:text-gray-400'
                            : 'text-gray-400 hover:text-blue-600'}`
                    }>Active</button>
                <button
                    onClick={() => changeFilter("completed")}
                    className={
                        `${filter === "completed"
                            ? 'text-blue-600 hover:text-gray-400'
                            : 'text-gray-400 hover:text-blue-600'}`
                    }>Complete</button>
            </div>
        </section>
    );
}

export default TodoFilter;