import { useState } from "react";

type TodosContextObj = {
    items: Todo[];
    addTodo: () => void;
    removeTodo: (id: string) => void;
}

const TodosContext = React.createContext<{
   TodosContextObj
}>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC<> = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }

  const contextValue:  = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: (id: string) => {},
  };
    return <TodosContext.Provider>
        {props.children}
    </TodosContext.Provider>
}

export default App;