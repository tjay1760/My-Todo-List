import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const html = readFileSync(resolve(__dirname, './index.html'), 'utf8');
const { window } = new JSDOM(html);
const { document } = window;

const todoList = document.getElementsByClassName('todo-list')[0];
let todoItems = [];

const addTodo = (todo) => {
  const todolistObj = {
    description: todo,
    completed: false,
    index: todoItems.length,
  };
  todoItems.push(todolistObj);
};

const deleteTodoItem = () => {
  todoItems = todoItems.filter((item) => item.completed === false);
};

describe('Todo List', () => {
  beforeEach(() => {
    todoItems = [];
  });
});