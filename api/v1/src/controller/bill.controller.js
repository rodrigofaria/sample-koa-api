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

const updateBill = async ctx => {
  const bill = await Bill.findByIdAndUpdate(ctx.params.id, {
    $set: {
      value: ctx.request.body.value,
      category: ctx.request.body.category,
      description: ctx.request.body.description,
      dueDate: ctx.request.body.dueDate
    }
  })

  if (!bill) {
    ctx.throw(404)
  }

  ctx.body = await Bill.findById(ctx.params.id)
}

const deleteBill = async (ctx) => {
  const bill = await Bill.findByIdAndRemove(ctx.params.id)
  if (!bill) {
    ctx.throw(404)
  }
  ctx.body = bill
}

module.exports = {
  listBills,
  createBill,
  updateBill,
  deleteBill
}
