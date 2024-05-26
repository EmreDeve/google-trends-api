import express from 'express'
import pkg from '../examples.js';

const { get_realtime } = pkg;
const app = express()

app.get('/realtime', async (req, res) => {
  const geo = req.query.geo
  const category = req.query.category

  try {
    const results = await get_realtime('US', 'all');
    return res.json({
      error: 0,
      results: results
    })
  } catch (err) {
      return res.json({
        error: 1
      })
  }
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