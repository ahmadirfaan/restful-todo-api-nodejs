
export class TodolistService {

    todolist = ["Ahmad", "Irfaan", "Hibatullah"];

    getJSONTodoList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value,
                }
            })
        })
    }

    getTodoList(request, response) {
        response.write(this.getJSONTodoList());
        response.end();
    }

    createTodo(request, response) {

    }
}