import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summery } from './Summary';


const csvFileReader = new CsvFileReader('football.csv');
const summary = Summery.winsAnalysisAndHtmlReport('Man United');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
