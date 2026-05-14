const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World from Node.js!',
    version: process.env.APP_VERSION || 'v1',
    timestamp: new Date().toISOString()
  })
})

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})
// ↑ CRITICAL — Kubernetes readiness probe calls this
// Without it, pods never become Ready and app never deploys

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})