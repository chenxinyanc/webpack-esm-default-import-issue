# webpack-esm-import

This repo compares the behavior of following imports in a js file

```js
import HighChartsReact_default from 'highcharts-react-official';
import * as HighChartsReact_star from 'highcharts-react-official';
import { HighchartsReact } from 'highcharts-react-official';
```

when the `package.json` governing this js file has (or does not have) ``"type": "module"`` property.

`highcharts-react-official` is a module pre-bundled by webpack using UMD export.

## Usage

Ensure you have installed yarn (`npm i -g yarn`), then in the repo root

```powershell
> yarn

> yarn start
```

Open the website started by dev server (`http://localhost:5080/`), and see the output on the HTML page

If there is `"type": "module"` in the `package.json` file of this repo root
```js
import default from 'highcharts-react-official'
  __esModule=true; $$typeof=undefined; default=[object Object]
                    ^ Not a React component

import * as Foo from 'highcharts-react-official'
  __esModule=true; $$typeof=undefined; default=[object Object]

import { HighchartsReact } from 'highcharts-react-official'
  __esModule=undefined; $$typeof=react.memo; default=undefined
```

If you remove this line (`"type": "module"`) from `package.json` file of this repo root
```js
import default from 'highcharts-react-official'
  __esModule=undefined; $$typeof=react.memo; default=undefined
                         ^ It is a React component

import * as Foo from 'highcharts-react-official'
  __esModule=true; $$typeof=undefined; default=[object Object]

import { HighchartsReact } from 'highcharts-react-official'
  __esModule=undefined; $$typeof=react.memo; default=undefined
```

Note that the default import didn't got unwrapped in the first case, and it behaves almost the same as star-import.
