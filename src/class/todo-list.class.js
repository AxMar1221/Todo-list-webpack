import { Todo } from "./todo.class";

export class TodoList {

    constructor(){

        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ) {

        this.todos.push( todo );
        this.guardarLocalStorage();

    }

    elmininarTodo( id ){

        this.todos = this.todos.filter( todo => todo.id != id )
        this.guardarLocalStorage();

    }

    marcarCompletado( id ) {

        for ( const todo of this.todos ){

            if ( todo.id == id ){
                todo.comletado = !todo.comletado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados( ) {

        this.todos = this.todos.filter( todo => !todo.comletado );
        this.guardarLocalStorage();
        
    }

    guardarLocalStorage(){
        
        localStorage.setItem( 'todo', JSON.stringify( this.todos ) );

    }

    cargarLocalStorage(){

        this.todos = localStorage.getItem('todo') 
            ? JSON.parse( localStorage.getItem('todo') ) 
            : this.todos = [] ;

            this.todos = this.todos.map( obj => Todo.fromJson( obj ) )

        // if( localStorage.getItem('todo') ){
        //     this.todos = JSON.parse( localStorage.getItem('todo') ) ;
        // } else {
        //     this.todos = [];
        // }

    }
    
}