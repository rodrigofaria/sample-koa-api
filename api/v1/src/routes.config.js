const KoaRouter = require('koa-router')
const billController = require('./controller/bill.controller')

const router = new KoaRouter({
  prefix: '/api/v1'
})

router.get('/bills', billController.listBills)
router.post('/bills', billController.createBill)
router.put('/bills/:id', billController.updateBill)
router.delete('/bills/:id', billController.deleteBill)

module.exports = router