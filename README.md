# setup-nodejs
Project Node.js (TypeScript, ESLint, Jest, Babel )

mkdir <name-project>
git init
yarn init
yarn add typescript -D
yarn tsc --init

new folder src
-new file server.ts

yarn add express
yarn add @types/express

Create a server in Serve.ts
    import express from 'express'

    const app = express()

    app.get('/', (req, res) => {
        return res.json({message: 'Hello World'})
    })yarn add ts-node-dev -D
    app.listen(3333)

yarn add ts-node-dev -D
yarn ts-node-dev src/server.ts

-package.json
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules  --no-notify src/server.ts"
},