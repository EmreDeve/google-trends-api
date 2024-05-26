const app = express()

app.get('/poll', async (req, res) => {
    console.log("heart beat")
    return res.json({
      message: "polling..."
    })
  })
  
  app.listen(3100, () => {
    console.log('Server is running at http://localhost:3100')
  })