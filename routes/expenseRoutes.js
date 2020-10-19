const router = require('express').Router()
const Exp = require('../models/expenseModel')

router.get('/home', async (req, res) => {
  try {
    res.json('home1')
  } catch (err) {
    res.json('fail')
  }
})

router.get('/', async (req, res) => {
  try {
    const items = await Exp.find().sort('-updatedAt')
    res.json(items)
  } catch (err) {
    res.json('fail')
  }
})
router.post('/', async (req, res) => {
  try {
    const items = await Exp.create(req.body)
    return res.status(201).json(items)
  } catch (err) {
    res.json('fail')
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const items = await Exp.findById(req.params.id)
    console.log(items)
    await items.remove()
    return res.status(201).json(items)
  } catch (err) {
    res.json('fail')
  }
})

module.exports = router
