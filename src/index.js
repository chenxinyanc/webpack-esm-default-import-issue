import HighChartsReact_default from 'highcharts-react-official';
import * as HighChartsReact_star from 'highcharts-react-official';
import { HighchartsReact } from 'highcharts-react-official';

export function printMyImports() {
  const outputEl = document.getElementById("output");

  console.log("import default from ->", HighChartsReact_default);
  console.log("import * from ->", HighChartsReact_star);
  console.log("import { HighchartsReact } from ->", HighchartsReact);

  function writeLine(str) { outputEl.innerText += `${str}\n`; }
  function printImportObjectOutline(obj) {
    writeLine(`  __esModule=${obj.__esModule}; $$typeof=${obj.$$typeof?.description}; default=${obj.default}`);
    writeLine("");
  }

  writeLine("import default from 'highcharts-react-official'");
  printImportObjectOutline(HighChartsReact_default);
  writeLine("import * as Foo from 'highcharts-react-official'");
  printImportObjectOutline(HighChartsReact_star);
  writeLine("import { HighchartsReact } from 'highcharts-react-official'");
  printImportObjectOutline(HighchartsReact);
}

printMyImports();
