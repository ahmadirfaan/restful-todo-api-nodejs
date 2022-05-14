export class TodolistService {

    todolist = [];

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

    responseErrorNotFound() {
        return JSON.stringify({
            code: 404,
            status: "OK",
            data: "Not found data"
        })
    }

    getTodoList(request, response) {
        response.write(this.getJSONTodoList());
        response.end();
    }

    createTodo(request, response) {
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo);

            response.write(this.getJSONTodoList());
            response.end();
        })
    }

    updateTodo(request, response) {
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            let index = body.id;
            if (index >= this.todolist.length) {
                response.write(this.responseErrorNotFound());
                response.end();
            } else {
                if (this.todolist[index]) {
                    this.todolist[index] = body.todo
                }

                response.write(this.getJSONTodoList());
                response.end();
            }
        })
    }

    deleteTodo(request, response) {
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            let index = body.id;
            if (index >= this.todolist.length) {
                response.write(this.responseErrorNotFound());
                response.end();
            } else {
                if (this.todolist[index]) {
                    this.todolist.splice(index, 1);
                }

                response.write(this.getJSONTodoList());
                response.end();
            }

        })
    }
}