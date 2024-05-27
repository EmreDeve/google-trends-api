import express from 'express';
import googleTrends from '../lib/google-trends-api.min.js';

const app = express()

app.get('/realtime', async (req, res) => {
  const geo = req.query.geo
  const category = req.query.category

  if (!geo || !category){
    return res.json({
      error: 1,
      msg: "geo or category is missing."
    })
  }

  console.log(`Getting Trends with geo: ${geo}, category: ${category}`)

  googleTrends.realTimeTrends({
    geo: geo,
    category: category,
    }, function(err, results) {
      if (err) {
        return res.json({
          error: 1,
          msg: "some error happen."
        })
      } else {
        console.log(`Success getting Trends with geo: ${geo}, category: ${category}`)
        return res.json({
          error: 0,
          results: results
        })
      }
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