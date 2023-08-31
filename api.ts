import { ErrorMsg, ITask } from "./types/tasks";

const baseUrl = 'http://localhost:7899';

export const getAllTodos = async():Promise<ITask[]>=>{
    try {
        const res = await fetch(`${baseUrl}/tasks`,{cache:'no-store'})
        const todos = await res.json();
        return todos;
    } catch (error) {
        // console.error(error);
        return [];
    }
}

export const addTodo = async(todo:ITask):Promise<ITask | ErrorMsg> =>{
    try {

        const res = await fetch(`${baseUrl}/tasks`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify(todo)
        })

        const newTodo = await res.json()
        return newTodo;
        
    } catch (error) {
        // console.error(error);
        return {statusCode:'404',msg:'no-data found'};
    }
}

export const updateTodo = async(todo:ITask):Promise<ITask | ErrorMsg> =>{
    try {

        const res = await fetch(`${baseUrl}/tasks/${todo.id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify(todo)
        })

        const updatedTodo = await res.json()
        return updatedTodo;
        
    } catch (error) {
        // console.error(error);
        return {statusCode:'404',msg:'Unable to process data'};
    }
}

export const deleteTodo = async(id:string):Promise<void | ErrorMsg> =>{
    try {

  await fetch(`${baseUrl}/tasks/${id}`,{
            method:'DELETE',
        })
        
    } catch (error) {
        // console.error(error);
        return {statusCode:'404',msg:'Something went wrong'};
    }
}