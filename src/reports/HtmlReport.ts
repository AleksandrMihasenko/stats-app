import fs from 'fs';
import { Output } from '../Summary';

export class HtmlReport implements Output {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis report</h1>
        <div>${report}</div>
      </div>
    `;
    
    fs.writeFileSync('report.html', html);
  }
}
