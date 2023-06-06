import HighChartsReact_default from 'highcharts-react-official';
import * as HighChartsReact_star from 'highcharts-react-official';
import { HighchartsReact } from 'highcharts-react-official';

export function printMyImports() {
  console.log("import default from ->", HighChartsReact_default);
  console.log("import * from ->", HighChartsReact_star);
  console.log("import { HighchartsReact } from ->", HighchartsReact);
}
