import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summery } from './Summary';


const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const summary = Summery.winsAnalysisAndHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
