# webpack-esm-import

This repo compares the behavior of following imports in ESM js file

```js
import HighChartsReact_default from 'highcharts-react-official';
import * as HighChartsReact_star from 'highcharts-react-official';
import { HighchartsReact } from 'highcharts-react-official';
```

`highcharts-react-official` is a module pre-bundled by webpack using UMD export.

## Usage

Ensure you have installed yarn (`npm i -g yarn`), then in the repo root

```powershell
> yarn

> yarn start
```

Open the website started by dev server (`http://localhost:5080/`), and take a look at the console.

```js
import default from -> Object
    HighchartsReact: (...)
    default: {$$typeof: Symbol(react.memo), type: {…}, compare: null}
    __esModule: trueget HighchartsReact: ƒ ()
    [[Prototype]]: Object

import * from -> Module
    HighchartsReact: (...)
    default: (...)
    __esModule: true
    Symbol(Symbol.toStringTag): "Module"
    get HighchartsReact: () => (value[key])
    get default: () => (value)

import { HighchartsReact } from -> Object
    $$typeof: Symbol(react.memo)
    compare: null
    type: {$$typeof: Symbol(react.forward_ref), render: ƒ}
    displayName: (...)
    get displayName: ƒ ()
    set displayName: ƒ (name)
    [[Prototype]]: Object
```
