---
title: Mongo Query Builder
---

# Mongo Query Builder

POC for generating mongo query from javascript conditional expressions. Built with [ES6+](http://babeljs.io/docs/learn-es2015/),
[Babel](http://babeljs.io/), [Browserify](http://browserify.org/),
[BrowserSync](http://www.browsersync.io/), [Mocha](http://mochajs.org/),
[Chai](http://chaijs.com/), [Sinon](http://sinonjs.org/).

## Features

&nbsp; &nbsp; ✓ Convert js conditionals to mongo query. Eg. ```QueryBuilder.build('a >= (b+c) && b == "test"')```
