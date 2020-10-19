const { model, Schema } = require('mongoose')

const ExpenseSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = Exp = model('expense', ExpenseSchema)
