import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface Output {
  print(report: string): void;
}

export class Summery {
  constructor(public analyzer: Analyzer, public output: Output) {}
}

new Summery(new WinsAnalysis(), new ConsoleReport())
