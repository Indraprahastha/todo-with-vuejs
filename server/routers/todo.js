let express = require('express')
let router = express.Router()
let todo = require('../controllers/todo')
let helper = require('../helpers/helper.js')

router.get('/',helper.auth,todo.getTodo)
router.post('/',todo.addTodo)
// router.get('/:id',user.findUser)
// router.put('/:id',user.editUser)
// router.delete('/:id',user.deleteUser)
// router.post('/login',user.loginUser)

module.exports = router

// 59c7edefb517ec7adff09e6a
