import { Todo } from "../../todo/index"
import "./styles.css"

export const AllTodoPage = () => {

    const todos = [
        {text: "Walk my dog", date: "10/10/2021", color:"blue", isComplete:false},
        {text: "Go workout", date: "10/10/2021", color:"red", isComplete:false},
        {text: "Do assignment", date: "10/10/2021", color:"red", isComplete:true},
    ];

    return (
        <div className="todos-container"> 
            {todos.map ((todo) => <Todo text={todo.text} fate={todo.date} color={todo.color} isComplete={todo.isComplete} />) }
        </div>
    )
}