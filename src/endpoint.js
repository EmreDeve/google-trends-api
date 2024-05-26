import express from 'express'

const app = express()
var googleTrends = require('../lib/google-trends-api.min.js');

app.get('/realtime', async (req, res) => {
  const geo = req.query.geo
  const category = req.query.category

  googleTrends.realTimeTrends({
      geo: geo,
      category: category,
    }, function(err, results) {
        if (err){
          return res.json({
            error: 1
          })
        }
        return res.json({
          error: 0,
          result: results
        })
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