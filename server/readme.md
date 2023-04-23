how to prerender a vue 3 project using vite? The project was created with: npm init vue@latest. Please write a simple instruction
<hr>
Sure, here's a simple instruction on how to prerender a Vue 3 project using Vite:

1. Install the necessary packages:
    ``` graphql

    npm install vite-plugin-ssr vue-router@next vue-server-renderer@next
    ```

1. Create a new folder called server in the root of your project.

1. In the server folder, create a new file called index.js. In this file, add the following code:

    ```js

    const { createServer } = require('vite')
    const { createSSRApp } = require('vue')
    const { renderToString } = require('@vue/server-renderer')
    const { default: App } = require('../src/App.vue')
    const { default: router } = require('../src/router')

    const app = createSSRApp(App)
    app.use(router)

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
    ```
This code sets up a basic SSR server using Vite and the vite-plugin-ssr plugin.

1. In your package.json file, add a new script called serve:ssr that runs the SSR server:

    ```json

    "scripts": {
    "serve:ssr": "node server/index.js"
    },
    ```
1.  Run the SSR server using the following command:

    ``` arduino

    npm run serve:ssr
    ```
Your Vue 3 project should now be prerendered using Vite and SSR. When you visit http://localhost:3000, you should see your app rendered server-side.

<hr>
The following error occures: SyntaxError: await is only valid in async functions and the top level bodies of modules
<hr>

The error message you're seeing indicates that the await keyword can only be used inside an asynchronous function or the top-level scope of a module. This means that you need to make sure that any code that uses await is inside an async function or an ES module.

Based on the code I provided earlier, it's possible that the error is being caused by the fact that the createServer function is not being called inside an asynchronous function.

To fix this error, you can modify your index.js file to use an asynchronous IIFE (Immediately Invoked Function Expression) to wrap the code that calls createServer, like this:

```js

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
```
By wrapping the code inside an IIFE, we can make use of the async keyword to make sure that the await keyword is used correctly. This should fix the error you're seeing.
<hr>
now occures the error: C:\Users\user\Documents\Git\ffvgs\src\App.vue:1
```
<script setup lang="ts">
^

SyntaxError: Unexpected token '<' 
```
<hr>
The error message you're seeing indicates that the JavaScript parser is encountering an unexpected token, which in this case is the < character at the beginning of your <script> tag. This typically happens when you try to include JavaScript code in a file that's not meant to contain JavaScript.

Based on the error message you provided, it seems like the error is occurring in your App.vue file. The most likely cause of the error is that you're trying to use the <script> tag in a file that's not being parsed as a Vue component. This can happen if you have a syntax error in your component, or if you're not importing it correctly.

To fix the error, make sure that your App.vue file is properly formatted as a Vue 3 component. Here's an example of a basic App.vue file:

``` vue

<template>
  <div>
    <h1>Hello, world!</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* Add your styles here */
</style>
```

Make sure that you're importing the App component correctly in your server/index.js file, like this:

```js

const { createSSRApp } = require('vue')
const { default: App } = require('../src/App.vue')

const app = createSSRApp(App)
```

Also, make sure that your server/index.js file is located in the server/ directory and that you're running the SSR server using the npm run serve:ssr command from the root directory of your project.

If you're still encountering the error after making these changes, try removing any unnecessary code from your App.vue file and simplifying it to a basic structure, then add back your code piece by piece to identify the source of the error.
<hr>
The error still occures, what else could i do
<hr>
If you're still seeing the error after following the previous steps, it's possible that the error is being caused by an issue with your build configuration.

To troubleshoot this issue, you can try the following:

1. Make sure that you have installed all the necessary dependencies for your project, including the @vue/compiler-sfc package which is needed to compile Vue single-file components.

1. Check your build configuration to make sure that you have set up the appropriate loaders for your project. In particular, you need to make sure that you have a vue-loader configured in your build process.

Here's an example of what your vite.config.js file could look like:

```js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
```

1. If you're using TypeScript in your project, make sure that you have the necessary TypeScript loaders and plugins configured. You may need to update your tsconfig.json file to include the correct settings for your project.

1. Check your file paths and make sure that your files are being imported correctly. For example, make sure that the path to your App.vue file is correct and that you're importing it with the correct syntax.

1. If none of the above solutions work, you can try creating a new Vue project from scratch using the vue create command and see if you encounter the same error. If the error persists, it may be a problem with your environment or installation.

If you're still unable to resolve the issue, you may need to provide more information about your project and build configuration to identify the source of the problem.