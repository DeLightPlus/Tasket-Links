import { useDispatch, useSelector } from 'react-redux';

import AddTodoItem from '../../components/todo-list/addtodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todoList);
 
  return (
    <div className='flex flex-1 flex-col justify-center items-center'>
      <AddTodoItem />
      
      {/* <TodoListItems todos={todos} />       */}
    </div>
  );
};

export default TodoList;
