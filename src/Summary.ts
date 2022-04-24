import { MatchData } from './MatchData';
import { WinsAnalysis } from './analysisSubjects/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface Output {
  print(report: string): void;
}

export class Summery {
  constructor(public analyzer: Analyzer, public output: Output) {}
  
  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.output.print(report);
  }
}
