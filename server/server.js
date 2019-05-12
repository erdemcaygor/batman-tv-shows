import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import "fetch-everywhere";
import App from '../src/App'
import { Provider } from 'react-redux'
import configureStore from '../src/modules/store'

const PORT = 8080
const app = express()

const router = express.Router()
const store = configureStore();

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <Provider store={store}>
            <App />
          </Provider>
        )}</div>`
      )
    )
  })
}
router.use('^/$', serverRenderer)
router.use('^/show-detail/:id$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})
