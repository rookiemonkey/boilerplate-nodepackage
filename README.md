# About

This is a template for me to create my own npm packages

### Installation

`npm i --save jsuse`

```

    const helpers = require('jsuse');

    console.log(helpers) 
    
        // returns an object of functions depending on their use
        {
            helpers: {
                basics: { greet: [Function], introduce: [Function] },
                basicsAgain: { greetAgain: [Function], introduceAgain: [Function] }
            }
        }

```