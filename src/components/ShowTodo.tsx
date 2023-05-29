import { Task } from "@/context/TaskContext";

const ShowTodos = () => {
  const todos: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
  
  return (
    <div>
      <h1>todos</h1>
      {todos?.map((todo: Task) => {
        return (
          <div key={todo.id}>
            <h1 className="text-white">{todo.title}</h1>
            <p className="text-white">{todo.text}</p>
            <p className="text-white">{todo.priority}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowTodos;
