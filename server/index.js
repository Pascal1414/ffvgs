const { createServer } = require('vite')
const { createSSRApp } = require('vue')
const { renderToString } = require('@vue/server-renderer')
const { default: App } = require('../src/App.vue')
const { default: router } = require('../src/router')

const app = createSSRApp(App)
app.use(router)

(async () => {
  const server = await createServer({
    server: {
      middlewareMode: 'ssr'
    }
  })

  server.middlewares.use(async (req, res) => {
    try {
      const html = await renderToString(app)
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(html)
    } catch (e) {
      console.error(e)
      res.statusCode = 500
      res.end('Internal Server Error')
    }
  })

  server.listen(3000)
  console.log('SSR server running at http://localhost:3000')
})()