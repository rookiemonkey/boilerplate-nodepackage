# About

This is a template for me to create my own npm packages

### Installation

`npm i --save jsuse`

```

    import helpers from 'jsuse';

    console.log(helpers) 
    
        // returns an object of functions depending on their use
        {
            basics: { 
                greet: [Function: greet], 
                introduce: [Function: introduce] 
            },
            basicsAgain: {
                greetAgain: [Function: greetAgain],
                introduceAgain: [Function: introduceAgain]
            }
        }

    import helpers from 'jsuse';
    const { basics } = helpers;
    const { basicsAgain } = helpers;

    console.log(basics.greet('Kevin'))
    console.log(basics.introduce())
    console.log(basicsAgain.greetAgain('Kevin'))
    console.log(basicsAgain.introduceAgain())

```

### Setup

    for node.js version <= v12
        Save the file with ES6 modules with .mjs extension and run it like
        ```
        node --experimental-modules my-app.mjs
        ```
    for node.js version >= v13
        You need to either:
        1. Save the file with .mjs extension, or
        2. Add { "type": "module" } on your package.json file.
