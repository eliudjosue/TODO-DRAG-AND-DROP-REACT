import { DragDropContext } from "@hello-pangea/dnd"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"


const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      complete: false,
    }
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => (todo.id !== id)))
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo))
  }

  const computedItemLeft = todos.filter((todo) => !todo.complete).length;

  const cleanComplete = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  }

  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.complete);
      case "completed":
        return todos.filter((todo) => todo.complete);
      default:
        return todos
    }
  }

  const changeFilter = (filter) => setFilter(filter);

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-no-repeat bg-contain min-h-screen bg-gray-300 transition-all duration-1000 dark:bg-gray-900
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')]
    md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] ">
      <Header />
      <main className="container mx-auto px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />

        <DragDropContext onDragEnd={handleDragEnd}>
        
          <TodoList todos={filterTodos()}
            removeTodo={removeTodo}
            updateTodo={updateTodo} />
        </DragDropContext>

        <TodoComputed
          computedItemLeft={computedItemLeft}
          cleanComplete={cleanComplete} />
        <TodoFilter
          changeFilter={changeFilter}
          filter={filter} />
      </main>

      <footer className="mt-8 text-center dark:text-gray-400">Drag and drop to recorder list</footer>
    </div>
  )
}

export default App