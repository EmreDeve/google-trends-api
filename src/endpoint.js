import express from 'express';
import googleTrends from '../lib/google-trends-api.min.js';

const app = express()

app.get('/realtime', async (req, res) => {
  try {
  const geo = req.query.geo
  const category = req.query.category

    googleTrends.realTimeTrends({
      geo: geo,
      category: category,
      }, function(err, results) {
        if (err) {
          return res.json({
            error: 1
          })
        } else {
          return res.json({
            error: 0,
            results: results
          })
        }
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