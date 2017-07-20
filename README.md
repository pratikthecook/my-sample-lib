# my-sample-lib - Angular library built with ❤ using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/my-sample-lib.svg)](https://badge.fury.io/js/my-sample-lib)
[![Build Status](https://travis-ci.org/pratikthecook/my-sample-lib.svg?branch=master)](https://travis-ci.org/pratikthecook/my-sample-lib)
[![Coverage Status](https://coveralls.io/repos/github/pratikthecook/my-sample-lib/badge.svg?branch=master)](https://coveralls.io/github/pratikthecook/my-sample-lib?branch=master)
[![dependency Status](https://david-dm.org/pratikthecook/my-sample-lib/status.svg)](https://david-dm.org/pratikthecook/my-sample-lib)
[![devDependency Status](https://david-dm.org/pratikthecook/my-sample-lib/dev-status.svg?branch=master)](https://david-dm.org/pratikthecook/my-sample-lib#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/pratikthecook/my-sample-lib.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://pratikthecook.github.io/my-sample-lib

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `my-sample-lib` via:
```shell
npm install --save my-sample-lib
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `my-sample-lib`:
```js
map: {
  'my-sample-lib': 'node_modules/my-sample-lib/bundles/my-sample-lib.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'my-sample-lib';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'my-sample-lib';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'my-sample-lib';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Pratik Kelwalkar. Licensed under the MIT License (MIT)

