import { MatchData } from './MatchData';
import { WinsAnalysis } from './analysisSubjects/WinsAnalysis';
import { HtmlReport } from './reports/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface Output {
  print(report: string): void;
}

export class Summery {
  static winsAnalysisAndHtmlReport(teamName: string): Summery {
    return new Summery(
      new WinsAnalysis(teamName),
      new HtmlReport()
    )
  }
  
  constructor(public analyzer: Analyzer, public output: Output) {}
  
  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.output.print(report);
  }
}
