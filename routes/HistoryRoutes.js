const HistoryCtrl = require('../controllers/HistoryCtrl')
const route = require('express').Router()

route.get('/', HistoryCtrl.GetHistory)
route.post('/', HistoryCtrl.PostHistory)
route.delete('/:id', HistoryCtrl.DeleteHistory)

module.exports = route