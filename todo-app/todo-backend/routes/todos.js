const express = require('express');
const { Todo } = require('../mongo');
const router = express.Router();

/* GET todos listing. */
router.get('/', async (req, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  });
  res.send(todo);
});

/* Middleware untuk mencari Todo berdasarkan ID */
const findWithId = async (req, res, next) => {
  const { id } = req.params;
  try {
    req.todo = await Todo.findById(id);
    if (!req.todo) return res.sendStatus(404);
    next();
  } catch (error) {
    return res.sendStatus(404);
  }
};

const singleRouter = express.Router();

/* DELETE todo */
singleRouter.delete('/', async (req, res) => {
  await req.todo.deleteOne();
  res.sendStatus(200);
});

/* PUT todo */
singleRouter.put('/', async (req, res) => {
  if (req.body.text !== undefined) req.todo.text = req.body.text;
  if (req.body.done !== undefined) req.todo.done = req.body.done;
  
  await req.todo.save();
  res.send(req.todo);
});

router.use('/:id', findWithId, singleRouter);

module.exports = router;
