import express from 'express'

const app = express()

app.get('/realtime', async (req, res) => {
  const geo = req.query.geo
  const category = req.query.category
  return res.json({
    geo: geo,
    category: category
  })
})

app.get('/poll', async (req, res) => {
    console.log("heart beat")
    return res.json({
      message: "polling..."
    })
  })
  
  app.listen(3100, () => {
    console.log('Server is running at http://localhost:3100')
  })