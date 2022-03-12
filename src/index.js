import './styles.css';
import { Todo, TodoList} from './class';

const todoList = new TodoList();
const tarea = new Todo( 'Aprdende JS ');

todoList.nuevoTodo( tarea );

console.log( todoList );