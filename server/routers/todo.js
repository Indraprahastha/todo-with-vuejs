let express = require('express')
let router = express.Router()
let todo = require('../controllers/todo')
let helper = require('../helpers/helper.js')

router.get('/',helper.auth,todo.getTodo)
router.post('/',todo.addTodo)
router.get('/:id',todo.findTodo)
router.put('/:id',todo.editTodo)
router.delete('/:id',todo.deleteTodo)

module.exports = router
