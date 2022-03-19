import './styles.css';
import { Todo, TodoList} from './class';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ));

// const newTodo = new Todo('Aprender JS!!.');
// todoList.nuevoTodo( newTodo );

// todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

console.log( 'todos' , todoList.todos );

// const tarea = new Todo( 'Aprdende JS!! ');
// todoList.nuevoTodo( tarea );

// console.log( todoList );
// crearTodoHtml( tarea );

// localStorage.setItem( 'mi-key', 'ABC123' );
// sessionStorage.setItem( 'mi-key', 'ABC124' );
// setTimeout( () => {¡
//     localStorage.removeItem('mi-key')
// },1500 );