# How to expose flow types in an NPM package

We assume that you already set up `babel` to compile your ES6 code (with flow
annotations) to ES5 code.

```
# We use this for easily generating *.flow.js files
npm install flow-copy-source --save-dev
```

Now use this tool to generate `*.flow.js` files for `lib` in your npm scripts:

```
// package.json
{
  "scripts": {
    "build:flow": "flow-copy-source -v -i '**/__tests__/**' src lib"
   }
}
```

Done. If you run this task after running your babel task, you will get a `lib`
directory structure like this:

```
$ tree lib

lib
├── index.js
├── index.js.flow
└── util
    ├── reduceChainPromises.js
    └── reduceChainPromises.js.flow

1 directory, 4 files
```

Check out `package.json` to see the whole configuration.
I also committed the resulting `lib` directory in this repository for showcasing
purposes.
