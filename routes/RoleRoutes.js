const RoleCtrl = require('../controllers/RoleCtrl')
const route = require('express').Router()

route.get('/', RoleCtrl.GetRole)
route.post('/', RoleCtrl.PostRole)
route.put('/', RoleCtrl.UpdateRole)
route.put('/:id', RoleCtrl.DeleteRole)

module.exports = route