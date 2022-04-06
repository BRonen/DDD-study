import express from 'express'

import { prisma } from './db'

const app = express()

app.use(express.json())

app.post('/', async (req, res) => {
  const user = await prisma.user.create({
    data: req.body
  })
  return res.json({user})
})

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany({})
  return res.json({users})
})

app.listen(5000, () => { console.log('🚀 Server ready at: http://localhost:5000/') })
