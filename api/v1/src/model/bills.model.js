const { Schema } = require('mongoose')
const mongoose = require('../db/mongoose.service')

const billSchema = new Schema(
  {
    value: Number,
    category: String,
    description: String,
    dueDate: Date
  },
  {
    versionKey: false
  }
)

billSchema.set('toObject', {
  transform: (doc, ret) => {
    console.debug(doc)
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

module.exports = mongoose.model('Bill', billSchema)
