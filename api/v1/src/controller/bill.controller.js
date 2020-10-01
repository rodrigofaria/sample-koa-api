const Bill = require('../model/bills.model')

const listBills = async (ctx) => {
  ctx.body = await Bill.find()
}

const createBill = async (ctx) => {
  const bill = new Bill(ctx.request.body)
  ctx.status = 201
  ctx.type = 'application/json'
  ctx.body = await bill.save()
}

const updateBill = ctx => {
  ctx.body = 'Will be implemented'
  console.log('[PUT] Will be implemented')
}

const deleteBill = ctx => {
  ctx.body = 'Will be implemented'
  console.log('[DELETE] Will be implemented')
}

module.exports = {
  listBills,
  createBill,
  updateBill,
  deleteBill
}
