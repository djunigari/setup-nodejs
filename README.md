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

-tsconfig.json
    "target": "es2017",
    "lib": ["ES6"],  
    "allowJs": true, 
    "outDir": "./dist",
    "rootDir": "./src", 
    "removeComments": true,
    // "strict": true, 
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "typeRoots": [
      "./node_modules/@types",
      "./src/@types"
    ],     
    "resolveJsonModule": true, 

yarn tsc
-tsconfig.json add paths
    "baseUrl": "./",
    "paths": {
      "@controllers/*": ["controllers/*"],
      "@models/*": ["models/*"],
      "@config/*": ["config/*"],
    }
    //..
    "include": [
        "src/**/*"
    ]

yarn add tsconfig-paths -D

-package.json add -r tsconfig-paths/register
    "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only --ignore-watch node_modules  --no-notify src/server.ts"

yarn add eslint -D
yarn eslint --init
    -To check syntax, find problems, and enforce code style
    -JavaScript modules (import/export)
    -None of these
    -Use a popular guide
yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@^7.12.1 eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0 eslint-plugin-promise@^4.2.1 || ^5.0.0 @typescript-eslint/parser@latest

-VSCode add plugin: eslint

-VS Code Setting.json add
    "eslint.validate": [ "javascript", "javascriptreact", "html", "typescriptreact" ],
    "eslint.format.enable": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }

yarn add jest -D
yarn jest --init
yarn add ts-jest -D
yarn add @types/jest -D

jest.config.ts add 
    preset: 'ts-jest'

new folder src/test
new file FirstTest.spec.ts

- .eslinttrc.json add 
    "env": { 
        //...
        "jest": true
    }

-jest.config.ts add 
    const { compilerOptions } = require('./tsconfig.json')
    const { pathsToModuleNameMapper } = require('ts-jest')
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
    preset: 'ts-jest'


yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver

new file babel.config.js

-package.json add build script
    "scripts": {
        "build": "babel src --extensions \".js,.ts\" --out-dir dist --copy-files --no-copy-ignored",
        "start": "node dist/server.js"

new file .eslintignore add
    dist
    /*.js