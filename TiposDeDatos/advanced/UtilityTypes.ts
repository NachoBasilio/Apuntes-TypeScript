//Partial<T>
interface Task{
    id: number;
    name: string;
    isCompleted: boolean;
    description?: string;
}

function updateTask(id: string, task: Partial<Task> ) {
    console.log("Updating task");
}

const newTask ={
    name: "New Task",
}

updateTask("1", newTask);

//Required<T>

// interface Todo {
//     title?: string;
//     description?: string;
// }

// const myTodo : Required<Todo> = {
//     title: "Hello",
//     description: "World"
// }

//Records<K,T>

interface PageInfo {
    title: string;
    age: number;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
    home: {title: "Home", age: 30},
    about: {title: "About", age: 30},
    contact: {title: "Contact", age: 30},
} 

//Pick<T,K>

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;//"title" | "completed"

//Omit<T,K>

type TodoPreview2 = Omit<Todo, "description">;//"title" | "completed"