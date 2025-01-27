const express = require('express');
const router = express.Router();

// In-memory todos array, replace with DB
let todos = [
    { id: 1, text: 'get coffee'},
    { id: 2, text: 'take a nap'},
];

// GET todos API endpoint
router.get('/', (req, res) => {
    res.json(todos);
});

// POST todos API endpoint
router.post('/', (req, res) => {
    const newTodo = { id: Date.now(), text: req.body.text };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// DELETE todo by id API endpoint
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter((todo) => todo.id !== id);
    res.status(204).end();
});

module.exports = router;