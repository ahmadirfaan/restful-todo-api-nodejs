import http from "http";
import {TodolistService} from "./todolist-service.mjs";

const service = new TodolistService();
const server = http.createServer((request, response) => {

    response.setHeader("Content-Type", "application/json")
    if(request.method === "GET") {
        service.getTodoList(request, response);
    } else if(request.method === "POST") {
        service.createTodo(request, response)
    }
});

server.listen(3000)

